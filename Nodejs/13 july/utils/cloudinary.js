import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

export const uploadOnCloudinary = (file) => {
  console.log(file, "==>>> file")
  cloudinary.uploader
  .upload(file.path)
  .then(result=>{
    console.log(result)
    setTimeout(()=> fs.unlink(file.path, (err) => console.log(err)), 5000)
  })
  .catch((err)=> console.log(err))
}