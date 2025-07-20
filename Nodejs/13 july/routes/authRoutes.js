import {Router} from "express"
import { getJobAds, loginHandler, profilePicUpload, signupHandler, userEnroll, verifyEmail } from "../controllers/authController.js"
import { createRateLimiter } from "../utils/commonFunctions.js"
import multer from "multer"

export const authRoutes = Router()

// To store a file on your server, use below code

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.mimetype.split('/')[1]}`)
  }
})

const upload = multer({ storage: storage })

// To store file in your memory then use below code

// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })

authRoutes.post('/signup', signupHandler)
authRoutes.post('/login', createRateLimiter(1 * 60 * 1000, 2, "ponka aap ko allow nahin is sey ziyaada"), loginHandler)
authRoutes.post('/verifyEmail', verifyEmail)
authRoutes.post('/profilePic', upload.single('hanzala'), profilePicUpload)


// without BullMQ email flow

authRoutes.post('/user-enroll', userEnroll)

authRoutes.get('/jobAds', getJobAds)
