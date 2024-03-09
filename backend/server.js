const express = require("express");
const app = express();
app.set("view engine", "ejs");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.render("index.ejs");
  // res.send({ message: "Hello World!", email: "taj77@uakron.edu" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
