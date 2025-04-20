import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todoMessage: {
    type: String,
    required: true,
  },
  creatorId: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
}, { timestamps: true })


export default mongoose.model('Todo', todoSchema);