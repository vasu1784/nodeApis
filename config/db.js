const { createPool } = require("mysql");

const db = createPool({
  port: process.env.DB_PORT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
//   connectionLimit: 10,
});

module.exports = db;
