const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/User'); // Update the path as per your project structure

dotenv.config();

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  optionSuccessStatus:200,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));



app.use(bodyParser.json());


// middleware for session
app.use(
    session({
        secret: process.env.REDISSTORESECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: false,
            maxAge: 1000 * 60 * 10
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(`[${req.method}] - ${req.url}`);
  next();
});


passport.serializeUser((user, done) => {
  done(null, user.user_id);
});



passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err, null));
});



passport.use(new LocalStrategy({
  usernameField: 'email', 
  passwordField: 'password'
},
(email, password, done) => {
  User.findOne({ where: { email: email } })
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
    .catch(err => done(err));
}
));





const routes = require('./routes/index');
app.use("/api", routes);

app.get("/*", (req, res) => {
  // Serve static files
});

const PORT = process.env.PORT  || 8000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
