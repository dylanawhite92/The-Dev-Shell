// Handle registering and adding users

const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator/check");

// Import User schema
const User = require("../../models/User");

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required.")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email.").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters."
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructuring all input so that req.body is not constantly typed
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists." }] });
      }

      // Get user's gravatar (based on email)

      // Encrypt password

      // Return jsonwebtoken

      res.send("User Route.");
    } catch (error) {
      console.error(error.message);

      res.status(500).send("Server error.");
    }
  }
);

module.exports = router;
