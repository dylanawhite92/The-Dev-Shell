// Handle CRUD operations for user profiles
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../../models/User");
const Profile = require("../../models/Profile");

// @route   GET api/profile/me
// @desc    Get Current User's Profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no profile for this user!" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error.");
  }
});

// @route   POST api/profile
// @desc    Create/Update A User's Profile
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("Status", "Status is required!")
        .not()
        .isEmpty(),
      check("Skills", "Skills are required!")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {}
);

module.exports = router;
