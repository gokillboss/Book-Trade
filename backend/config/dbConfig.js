const dotenv = require('dotenv');
dotenv.config();



// module.exports = {
//   HOST : 'localhost',
//   USER : 'root',
//   PASSWORD : 'hohuudai',
//   DATABASE : 'test',
//   DIALECT: 'mysql'
// }

module.exports = {
  HOST : process.env.DB_HOST,
  USER : process.env.DB_USER,
  PASSWORD : process.env.DB_PASS,
  DATABASE : process.env.DB_NAME,
  DIALECT: 'mysql'
}