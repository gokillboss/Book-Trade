const session = require('express-session');

module.exports = session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
});
