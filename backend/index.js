const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "testdb"
});

db.connect(() => console.log("Connected to MySQL"));

app.get("/", (req, res) => {
  res.send("Backend running with MySQL + Docker");
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});