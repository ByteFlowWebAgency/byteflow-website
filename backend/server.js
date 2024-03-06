// Filename - backend/server.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Connected to React");
  res.send("Hello World!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
