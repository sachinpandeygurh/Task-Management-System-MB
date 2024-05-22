import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: [true, 'user name is require'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'user email is require'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'user password is require'],
  }
});

export default mongoose.model('User', userSchema);
