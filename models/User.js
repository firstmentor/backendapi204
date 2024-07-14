const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true

  },
  email: {
    type: String,
    require: true

  },
  password: {
    type: String,
    require: true

  },

  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

   role: {
    type: String,
    default: 'user',
    require: true
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});
var userModel = mongoose.model('users', userSchema);
module.exports = userModel;