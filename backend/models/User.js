const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    bio: { type: String, required: true },
    folders: [{ type: String }],
    interests: [{ type: String }],
    isAdmin: { type: Boolean, required: true },
    photo: { type: String, required: true },
    uid: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
