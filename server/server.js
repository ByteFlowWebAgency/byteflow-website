// server.js

// express setup
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// server.js
const db = require("./db"); // Import the database connection

app.post("/api/joinus", (req, res) => {
  const { firstName, lastName, phoneNumber, email } = req.body;
  const sql =
    "INSERT INTO users (first_name, last_name, phone_number, email) VALUES (?, ?, ?, ?)";
  db.query(sql, [firstName, lastName, phoneNumber, email], (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
      return;
    }
    console.log("User signed up successfully:", result);
    res
      .status(200)
      .json({ success: true, message: "User signed up successfully" });
  });
});
