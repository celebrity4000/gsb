const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema(
  {
    mail: { type: String, required: true },
    otp: { type: String, required: true },
    willExpireAt: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OTP", OTPSchema);