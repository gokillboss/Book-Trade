const express = require('express');
const passport = require('../config/passport');
const router = express.Router();

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true, 
  })
);

router.post('/register', (req, res) => {
  
});

module.exports = router;
