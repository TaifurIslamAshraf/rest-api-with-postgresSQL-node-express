const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "shop",
  port: 5432,
  password: "12345",
});

module.exports = pool;
