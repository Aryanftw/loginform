const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB connected : ${connection.connection.host}`)
  } catch (error) {
    console.log("Error in DB connection ",error.message)
    process.exit(1)
  }
}

module.exports = connectDB;