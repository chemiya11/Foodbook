const mysql = require('mysql2');
require('dotenv').config()

// create the connection to database
const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password:process.env.DB_PASSWORD,
  port:process.env.DB_PORT
});

module.exports={
    conexion
}