const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenandAdmin,
} = require("../middlewares/verifyToken");
const Story = require("../models/Story");

router.post("/", verifyToken, async (req, res) => {
  const newStory = new Story(req.body);
  try {
    const savedStory = await newStory.save();
    res.status(200).json(savedStory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get all stories
router.get("/", verifyToken, async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to update a story by ID
router.put("/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    const updatedStory = await Story.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to delete a story by ID
router.delete("/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.status(200).json("Story has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
