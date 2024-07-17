// 4 steps to make server
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;;
app.get("/", (req, res) => {
  res.send("Server starting");
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
