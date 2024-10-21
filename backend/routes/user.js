const {
  verifyTokenandAuthorization,
  verifyTokenandAdmin,
} = require("../middlewares/verifyToken");
const User = require("../models/User");

const router = require("express").Router();

//Update
router.put("/:id", verifyTokenandAuthorization, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", verifyTokenandAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account deleted succesfully...");
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get User
router.get("/find/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
