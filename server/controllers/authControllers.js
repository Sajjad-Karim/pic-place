const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../helpers/accessToken");
const { generateRefreshToken } = require("../helpers/refreshToken");
const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }
    const securePassword = await bcrypt.hash(password, 10);
    user = new User({
      username,
      email,
      password: securePassword,
      accountType,
    });
    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "User Created Successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email and password are provided in the request body
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Please Signup" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const data = {
      id: user._id,
      accountType: user.accountType,
      author: user.username,
    };
    const accessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      accessToken,
      refreshToken,
      role: user.accountType,
      author: user.username,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { login, signup };
