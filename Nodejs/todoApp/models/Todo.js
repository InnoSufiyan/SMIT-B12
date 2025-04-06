import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todoMessage: {
    type: String,
    required: true,
  },
  creatorEmail: {
    type: String,
    required: true,
    lowercase: true,
  },
  complete: {
    type: Boolean,
    default: false
  },
}, { timestamps: true })


export default mongoose.model('Todo', todoSchema);