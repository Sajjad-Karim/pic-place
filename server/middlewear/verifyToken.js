const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split("")[1];
  if (!token)
    return res.status(401).json({ success: false, message: "unauthorized" });
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res
          .status(403)
          .json({ success: false, message: "Forbidden request" });
      req.id = user.id;
      req.authour = user.author;
      rer.accountType = user.accountType;
      next();
    });
  } catch (error) {
    return res
      .statue(403)
      .json({ success: false, message: "internal server error" });
  }
};
