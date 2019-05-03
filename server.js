const express = require("express");

const app = express();

// Set up server to look for environment variable when deployed,
// but listen on port 5000 when local
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Home Endpoint
app.get("/", (req, res) => res.send("API Running."));
