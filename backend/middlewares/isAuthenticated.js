// middlewares/isAuthenticated.js

module.exports = (req, res, next) => {
  // Check if the userId exists in the session. 
  // The presence of userId indicates that the user is logged in.
  if (req.session && req.session.userId) {
      return next(); // User is authenticated, so continue to the next middleware or route handler
  }

  // If not authenticated, return a 401 Unauthorized status code
  res.status(401).send({ message: 'Unauthorized: Please log in to access this resource.' });
};
