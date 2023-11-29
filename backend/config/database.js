const dotenv = require('dotenv');
const mysql = require('mysql2');
dotenv.config();


const connection = mysql.createConnection({
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  user : process.env.DB_USER,
  database : process.env.DB_NAME,
  //database : 'test',
  password : process.env.DB_PASS
})



module.exports = connection


// Connection pool
// const connection = mysql.createPool({
//   host : process.env.DB_HOST,
//   port : process.env.DB_PORT,
//   user : process.env.DB_USER,
//   database : process.env.DB_NAME,
//   password : process.env.DB_PASS,
//   waitForConnections : true,
//   connectionLimit : 10,
//   queueLimit : 0
// })




