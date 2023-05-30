const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

// Create the model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;