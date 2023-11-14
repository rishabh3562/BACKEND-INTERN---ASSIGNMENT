const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGO_URI||"mongodb://localhost:27017/your-database";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri)

    console.log(`MongoDB Connected `);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
