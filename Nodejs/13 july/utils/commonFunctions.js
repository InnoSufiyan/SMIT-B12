import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import pkg from 'jsonwebtoken';

dotenv.config();

const emailConfig = {
  service: 'gmail',
  auth: {
      user: process.env.PORTAL_EMAIL,
      pass: process.env.PORTAL_PASSWORD,
  },
};

export const generateEmail = async (mail, otp) => {
  const transporter = nodemailer.createTransport(emailConfig);

  const mailOptions = {
      from: 'zainulabedin2407@gmail.com',
      to: mail,
      subject: 'OTP Verification',
      text: `Your OTP is: ${otp}`,
  };

  try {
      await transporter.sendMail(mailOptions);
      return `OTP sent to ${mail} via email`;
  } catch (error) {
      throw `Error sending OTP to ${mail} via email: ${error}`;
  }
}




const { sign, verify } = pkg;

const jwtSecretKey = "123456";

export const GenerateToken = ({ data, expiresIn }) => {
  //make the key more harder
  //expires in should also be from .env file
  //good approach
  return sign({ result: data }, jwtSecretKey, {
    expiresIn: expiresIn,
  });
};

export const VerifyToken = (token) => {
  return verify(token, jwtSecretKey);
};