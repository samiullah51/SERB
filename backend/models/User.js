const mongoose = require("mongoose");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isemail");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail, "Please Enter a valid Email"],
    },
    password: {
      type: String,
      required: true,
    },
    otpCode: {
      type: Number,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
