const express = require('express');
const passport = require('../config/passport'); // Import Passport
const router = express.Router();

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true, // Hiển thị thông báo lỗi
  })
);

router.post('/register', (req, res) => {
  // Xử lý đăng ký người dùng và lưu thông tin vào cơ sở dữ liệu
});

module.exports = router;
