const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema(
  {
    storyImg: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", StorySchema);
