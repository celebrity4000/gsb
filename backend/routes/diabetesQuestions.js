const {
  addNewQuestion,
  getQuestions,
  deleteQuestionById,
  updateNewQuestion,
} = require("../controller/DiabetesQuestions.controller");

const router = require("express").Router();

router.get("/", getQuestions);

router.post("/", addNewQuestion);

router.put("/:id", updateNewQuestion);

router.delete("/:id", deleteQuestionById);

module.exports = router;