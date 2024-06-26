import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUsers() {
  const rows = await pool.query("SELECT * FROM users;");
  return rows;
}

export async function createUser(first_name, last_name, phone_number, email) {
  const result = await pool.query(
    `
  INSERT INTO users (first_name, last_name, phone_number, email)
  VALUES (?, ?, ?, ?);
  `,
    [first_name, last_name, phone_number, email]
  );
  return result;
}
