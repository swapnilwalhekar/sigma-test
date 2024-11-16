const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("Database Connected");
  } catch (err) {
    console.log("err", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// swapnilwalhekar1999
// F6u1ptW3G8oFkziG
