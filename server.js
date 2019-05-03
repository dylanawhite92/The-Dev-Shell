const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

// Home Endpoint
app.get("/", (req, res) => res.send("API Running."));

// Set up server to look for environment variable when deployed,
// but listen on port 5000 when local
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
