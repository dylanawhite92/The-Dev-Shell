// Handle forum/messaging routing such as likes and comments
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post(
  "/posts",
  [
    auth,
    [
      check("text", "Writing something in your post is required!")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);

module.exports = router;
