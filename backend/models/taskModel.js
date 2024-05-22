import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Task title is required"]
  },
  description: {
    type: String,
    required: [true, "Task description is required"]
  },
  dueDate: {
    type: Date,
    required: [true, "Task due date is required"]
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "User ID is required"]
  }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
