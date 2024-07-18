// 4 steps to make server
const express = require("express");

const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const { log } = require("console");
const { connectDB } = require("./connection");
const  cors  = require("cors");
// const authRoute = require("./routes/authRoutes")
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server starting");
});
// app.use("/api", authRoute);

// importing routes dynamically
readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
