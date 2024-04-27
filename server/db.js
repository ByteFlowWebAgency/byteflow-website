import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "T@90hns0n245",
    database: "join_us_form",
  })
  .promise();

async function getData() {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
}

const data = await getData();
console.log(data);
