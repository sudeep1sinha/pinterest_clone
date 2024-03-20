const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
    
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  createdAt: {
    type: Date,
    default: Date.now, // Store current date and time automatically
  },
  likes: [{
    type: Array,
    default: [], // Reference the User model
  }],
});

module.exports = mongoose.model('post', postSchema);