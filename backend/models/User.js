const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userImg: { type: String },
    phoneNumber: { type: String, required: true, unique: true },
    verified: { type: Boolean, default: false },
    name: { type: String },
    age: { type: Number },
    weight: { type: String },
    golWeight: { type: String },
    goalHeight: { type: String },
    address: { type: String },

    goal: { type: String },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
