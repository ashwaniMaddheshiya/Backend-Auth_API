const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { email, password, address, phone } = req.body;

    if (!(email && password && address && phone)) {
      return res.status(400).send("All input is required");
    }

    const encryptedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: encryptedPass,
      address,
      phone,
    });

    await user.save();

    return res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      return res.status(200).json(user);
    }

    return res.status(400).send("Invalid Credential");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
