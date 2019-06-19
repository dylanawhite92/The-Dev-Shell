const mongoose = require("mongoose");
const config = require("config");
// Pull mongoDB connection string from default.json
const db = config.get("mongoURI");

// Async/Await connection
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected.");
  } catch (err) {
    console.log(err.message);

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
