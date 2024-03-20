const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/userdata")


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,   
  },
  password: {
    type: String,   
  },
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'post'
  }],
  dp: {
    type: String,
    default: '', // Provide a default value if desired
  },
  email: {
    type: String,
    required: true,
    
  },
  fullname: {
    type: String,
    required: true,
    
  },
});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);