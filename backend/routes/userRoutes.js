const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Registration route
router.post('/register', userController.registerUser);

// Login route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json({ status: 'OK', user });
    });
  })(req, res, next);
});

// Get profile route - requires authentication middleware
router.get('/profile', isAuthenticated, userController.getUserProfile);

// Update profile route - requires authentication middleware
router.put('/profile', isAuthenticated, userController.updateUserProfile);

// List users route
router.get('/list', userController.listUser);

// ... add other user-related routes as needed

module.exports = router;
