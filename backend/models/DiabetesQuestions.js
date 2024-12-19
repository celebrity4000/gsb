const mongoose = require("mongoose");

const DiabetesQuestionsSchema = new mongoose.Schema(
  {
    questionText: { type: String, required: true },
    options: { type: [String], required: true },
    isMultipleChoice: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DiabetesQuestions", DiabetesQuestionsSchema);