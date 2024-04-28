import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: "us-cluster-east-01.k8s.cleardb.net",
    user: "bdc97cf031355c",
    password: "26c1f90d",
    database: "heroku_5706a2f1fa929c6",
  })
  .promise();

export async function getUsers() {
  const rows = await pool.query("SELECT * FROM users");
  return rows;
}

export async function createUser(first_name, last_name, email, phone_number) {
  const result = await pool.query(
    `
  INSERT INTO users (first_name, last_name, email, phone_number)
  VALUES (?, ?, ?, ?)
  `,
    [first_name, last_name, email, phone_number]
  );
  return result;
}
