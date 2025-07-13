import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'prefer not to say'],
    default: 'prefer not to say',
  },
  dateOfBirth: Date,
  country: String,
  city: String,
  description: String,
  jobTitle: String,
  profilePic: {
    type: String,
    default: '',
  },
  coverPhoto: {
    type: String,
    default: '',
  },
  views: {
    type: Number,
    default: 0,
  },
  jobsApplied: {
    type: Number,
    default: 0,
  },
  jobsSaved: {
    type: Number,
    default: 0,
  },
  jobsFavourite: {
    type: Number,
    default: 0,
  },
  appreciations: {
    type: Number,
    default: 0,
  },
  totalPoints: {
    type: Number,
    default: 0,
  },
  otp: {
    type: String,  //123456
  },
  otpExpires: {
    type: Date,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });


export default mongoose.model('User', userSchema);