const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  nickname: { type: String },
  profileimg: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
