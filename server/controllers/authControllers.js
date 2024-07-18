const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
  } catch (e) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const login = async (req, res) => {};
module.exports = { login, signup };
