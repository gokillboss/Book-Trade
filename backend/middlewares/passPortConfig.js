const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  (username, password, done) => {
    // Xác thực người dùng tại đây và gọi done() khi hoàn thành.
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Lấy thông tin người dùng từ id và trả về user
});

module.exports = passport;
