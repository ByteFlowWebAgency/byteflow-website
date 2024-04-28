// server.js

// import express
import express from "express";

// import dotenv
import dotenv from "dotenv";
dotenv.config();

// import db functions
import { getUsers, createUser } from "./db.js";

// import cors
import cors from "cors";

// create express app
const app = express();

// create PORT
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

// app POST request
app.post("/ourTeam", async (req, res) => {
  console.log("Request Body:", req.body);

  try {
    const { first_name, last_name, email, phone_number } = req.body;
    const user = await createUser(first_name, last_name, email, phone_number);
    res.status(201).send(user);
  } catch (error) {
    console.error("Error creating user: ", error);
    res.status(500).json({ success: false, message: "internal server error" });
  }
});

// listen for PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
