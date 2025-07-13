import { genSaltSync, hashSync } from "bcrypt";
import userSchema from "../models/userSchema.js";
import { nanoid } from 'nanoid'
import { sendError, sendSuccess } from "../utils/response.js";
import { GenerateToken, VerifyToken, generateEmail } from "../utils/commonFunctions.js";


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
      const emailSent = await generateEmail(email, otp)
      res.json(sendSuccess(true, "Signed up Successfully, OTP send to your email address please verify", {savedUser, token: token}))
    } else {
      console.log("===>> user didn't saved")
      res.json(sendError(false, "User did not saved"))
    }
  } catch (error) {
    res.json(sendError(false, "Something Went Wrong", error.message))
  }
}
export const loginHandler = (req, res) => {

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