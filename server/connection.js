const mongoose = require("mongoose");
const connectDB = async (req, res) => {
  const connection = await mongoose.connect(
    "mongodb+srv://sajukarim76:zOmzRqI1z2ChClBZ@cluster0.vjcpohy.mongodb.net/picplace?retryWrites=true&w=majority&appName=Cluster0"
  );
  if (connection.STATES.connected) return console.log("Database connected");
  if (connection.STATES.disconnected)
    return console.log("Database disconnected");
};
module.exports = { connectDB };
