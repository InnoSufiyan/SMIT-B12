import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const JobAd = mongoose.Schema(
  {
    designation: {               //jobtitle
      type: String,
      required: [true, 'Please Add Designation'],
    },
    desc: {
      type: String,
      required: [true, 'Please Add Job Description'],
    },
    companyName: {
      type: String,
      // required: [true, 'Please Add Post Data'],
    },
    aboutCompany: {
      type: String,
      // required: [true, 'Please Add Post Data'],
    },
    // companyRequirements: {
    //   type: String,
    //   required: [true, 'Please add the requirements you need'],
    // },
    featuredBenefits: {
      type: String,
    },
    // companySocialMedia: {
    //   type: String,
    //   required: [true, 'Please Add Post Data'],
    // },
    skills: {
      type: Array,
      default: [],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Categories',
      required: [true, 'Please add the category id'],
    },
    experience: {
      type: String,
      // required: [true, 'Please Add Experience'],
    },
    experienceMin: { type: Number },
    experienceMax: { type: Number },
    position: {
      type: String,
      default: 'Mid-Level',
      // required: [true, 'Please Add for which Position Level You need'],
    },
    noOfPositions: {
      type: Number,
      default: 1,
      // required: [true, 'Please Add for which Position Level You need'],
    },
    payRangeStart: {
      type: Number,
      required: [false],
    },
    payRangeEnd: {
      type: Number,
      required: [false],
    },
    salaryCurrency: {
      type: 'String',
      default: 'pkr',
    },
    jobFeseability: {
      type: String,
      default: "Onsite",
    },
    jobType: {
      type: String,
      default: "Full-Time",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please add user who posted'],
    },
    views: {
      type: Number,
      default: 0,
    },
    appliedBy: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    // dislikes: {
    //   type: [String],
    //   default: [],
    // },
    // shares: {
    //   type: [String],
    //   default: [],
    // },
    hashTags: {
      type: Array,
      default: [],
    },
    country: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    gender: {
      type: String,
      default: 'anyone',
    },
    applyEmail: {
      type: String,
    },
    applyPhone: {
      type: Number,
    },
    // Sponsorship fields
    sponsored: {
      type: Boolean,
      default: false,
    },
    sponsoredExpiry: {
      type: Date, // This field will store the expiry date for sponsorship
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    // sponsorshipPrice: {
    //   type: Number,
    //   default: 0,
    // },
    // sponsoredBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User', // Reference to the user who sponsored the ad
    // },
    reportCount: { type: Number, default: 0 },
    isHidden: { type: Boolean, default: false },
    matchLockats: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Single Field Indexes
JobAd.index({ designation: 1 });
JobAd.index({ companyName: 1 });
JobAd.index({ country: 1 });
JobAd.index({ city: 1 });
JobAd.index({ createdAt: -1 });
JobAd.index({ isVerified: 1 });
JobAd.index({ jobFeseability: 1 });
JobAd.index({ position: 1 });
JobAd.index({ jobType: 1 });
JobAd.index({ skills: 1 });

// Salary and Experience Indexes
JobAd.index({ payRangeStart: 1 });
JobAd.index({ payRangeEnd: 1 });
JobAd.index({ experience: 1 });
JobAd.index({ experienceMin: 1 });
JobAd.index({ experienceMax: 1 });

// Compound Indexes
JobAd.index({ isVerified: 1, createdAt: -1 });
JobAd.index({ category: 1, createdAt: -1 });
JobAd.index({ country: 1, city: 1 });
JobAd.index({ payRangeStart: 1, payRangeEnd: 1 }); // For salary range queries
JobAd.index({ experience: 1, createdAt: -1 }); // If filtering experience with creation date

export default mongoose.model('JobAd', JobAd);