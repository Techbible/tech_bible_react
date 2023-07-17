const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true },
    username: { type: String, required: true },
    bio: { type: String, required: false },
    interests: { type: Array, required: false },
    folders: [
      {
        name: { type: String, required: false },
        category: { type: String, required: false},
        tools : [
          {
            toolId :  { type: String, required: false }
          }
        ]
      }],
    photo: { type: String, required: false },
    isAdmin: { type: Boolean, required: false },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema, "Users");
module.exports = User;
