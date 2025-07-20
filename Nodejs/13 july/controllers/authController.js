import { genSaltSync, hashSync } from "bcrypt";
import userSchema from "../models/userSchema.js";
import { nanoid } from 'nanoid'
import { sendError, sendSuccess } from "../utils/response.js";
import { GenerateToken, VerifyToken, generateEmail } from "../utils/commonFunctions.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Queue } from 'bullmq';
import jobAd from "../models/jobAd.js";
import { redis } from '../index.js';

const emailQueue = new Queue("email-queue", {
  connection: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    username: "default",
    password: process.env.REDIS_PASSWORD,
  },
});



export const signupHandler = async (req, res) => {

  const {userName, firstName, lastName, email, password, cPassword} = req.body

  if(!userName || !firstName || !lastName || !email || !password || !cPassword) {
    return res.json(sendError(false, "All Fields are required"))
  }

  try {
    const user = await userSchema.findOne({ email: email });

    if(user) {
      return res.json(sendError(false, "Your email is already Exists"))
    }
  
    const userNameValidation = await userSchema.findOne({ userName: userName.toLowerCase().trim() });
  
    if(userNameValidation) res.json(sendError(false, "UserName aleady taken, please try another"))
  
    const salt = genSaltSync(10);
  
    let doc = new userSchema({
      firstName,
      lastName,
      email,
      password: hashSync(password, salt),  //it will hash our password
      userName: userName.toLowerCase().trim(),
    });

    const otp = nanoid().slice(0,6)

    doc.otp = otp
    doc.otpExpires = Date.now() + 600000; // OTP expires in 10 minutes
    doc.isVerified = false
  
    let savedUser = await doc.save();

    console.log(savedUser, "==>> savedUser")

    const token = GenerateToken({ data: savedUser, expiresIn: '24h' });



    console.log(token, "==>> token")
    
    if(savedUser) { 
      // const emailSent = await generateEmail(email, otp)
      res.json(sendSuccess(true, "Signed up Successfully, OTP send to your email address please verify", {savedUser, token: token}))
    } else {
      console.log("===>> user didn't saved")
      res.json(sendError(false, "User did not saved"))
    }
  } catch (error) {
    res.json(sendError(false, "Something Went Wrong", error.message))
  }
}
export const loginHandler = async (req, res) => {
  const {email, password} = req.body

  console.log(email, "==> email")

  const isUser = await userSchema.findOne({ email: email });

  if(!isUser) res.json(sendError(false, "Your Email does not exist, please create an account first"))

  console.log(isUser, "===>> isUser")
}

export const verifyEmail = async (req, res) => {
  const {otp} = req.body
  
  const token = req.header('Authorization')

  if(token.startsWith('Bearer')) {
    console.log(token.split(' ')[1], otp)

    const verifyingUser = VerifyToken(token.split(' ')[1])

    const userDetails = await userSchema.findOne({
      otp: otp,
      _id: verifyingUser.result._id,
      otpExpires: { $gt: new Date() } // only if the OTP is still valid
    });

    console.log(userDetails, "==>> userDetails")

    if(userDetails) {
      res.json(sendSuccess(true, "OTP is valid"))
      await userSchema.findByIdAndUpdate(verifyingUser.result._id, {
        isVerified: true
      })
    } else {
      res.json(sendError(false, "OTP is expired"))
    }
  } else {
    res.json(sendError(false, "No Token Received"))
  }
}

export const profilePicUpload = (req, res) => {
  uploadOnCloudinary(req.file)


}

async function addUserToCourseQuery() {
  console.log("Adding user to course in Database....");
}

async function mockSendEmail(payload) {
  const { from, to, subject, body } = payload;
  return new Promise((resolve, reject) => {
    console.log(`Sending Email to ${to}....`);
    setTimeout(() => resolve(1), 2 * 1000);
  });
}

export const userEnroll = async (req, res) => {
  console.log("Adding user to course");
  addUserToCourseQuery();

  // before i was sending email, on my own, which was taking time 

  // await mockSendEmail({
  //   from: "innosufiyan@gmail.com",
  //   to: "student@gmail.com",
  //   subject: "Congrats on enrolling in Mern Stack Course",
  //   body: "Dear Student, You have been enrolled to Mern Stack Course.",
  // });

  // now i will send data to my messaging queue (BullMQ)... and it will off load heavy task from my server to the queue
  console.log("now i will send data to my messaging queue (BullMQ)")
  try {
    await emailQueue.add(`${Date.now()}`, {
      from: "innosufiyan@gmail.com",
      to: "student@gmail.com",
      subject: "Congrats on enrolling in Twitter Course",
      body: "Dear Student, You have been enrolled to Twitter Clone Course.",
    });
    console.log("==> data sent successfully")
  } catch (error) {
    console.log(error, "==>> error")
  }

  return res.json({ status: "success", data: { message: "Enrolled Success" } });
}

export const getJobAds = async (req, res) => {
  console.log("====>>>redis jaa raha hun data dhoondney")
  const getAllJobsFromRedis = await redis.get('jobs')   //800ms

  if(getAllJobsFromRedis) {
    console.log("==>> data mil gaya hai, response karney laga hun")
    return res.json({
      status: true,
      data: JSON.parse(getAllJobsFromRedis)
    })
  }
  console.log("==>> data nai mila redis per, mongodb jaa raha hun data lenay")

  const getAllJobs = await jobAd.find().limit(300)    //5 sec

  console.log("==>> data mil gaya hai mongo se, redis main store karney laga hun")


  await redis.setex('jobs', 5000,JSON.stringify(getAllJobs))

  return res.json({
    status: true,
    data: getAllJobs
  })
}