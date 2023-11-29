const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig')

// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   //logging: true,
// });



const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host : dbConfig.HOST,
  dialect : dbConfig.DIALECT
})


async function testConnection() {
  try {
    // Use the authenticate() method to test the connection
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    // Handle any errors
    console.error('Unable to connect to the database:', error);
  }
}


// Call the testConnection() function
testConnection();


module.exports = sequelize; // Export the Sequelize instance
