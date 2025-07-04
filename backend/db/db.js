const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB connected : ${connection.connection.host}`)
  } catch (error) {
    res.status(400).error("Error in db connection");
  }
}

module.exports = connectDB;