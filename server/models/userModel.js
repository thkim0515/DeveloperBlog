const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String },
  nickname: { type: String },
  email: { type: String },
  password: { type: String },
  profileimg: {
    type: String,
    default: "noprofile.jpg",
  },
  signupdate: {
    type: Date,
    default: () => new Date(new Date().getTime() + 9 * 60 * 60 * 1000),
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
