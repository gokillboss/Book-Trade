// routes/bookRoutes.js
const express = require('express');
const bookController = require('../controllers/bookController');
const isAuthenticated = require('../middlewares/isAuthenticated');
const { route } = require('./test');

const router = express.Router();

router.get('/', (req,res) => {
  res.send('API book is good').status(200);
})

// Create a new book
router.post('/create', bookController.createBook);

// Get a specific book by its ID
router.get('/:bookId', bookController.getBookById);

// Update a specific book by its ID - requires authentication middleware
router.put('/:bookId/update', isAuthenticated, bookController.updateBook);

// Delete a specific book by its ID - requires authentication middleware
router.delete('/:bookId/delete', isAuthenticated, bookController.deleteBook);

// List all books (could add pagination, filtering, etc.)
router.get('/list/all', bookController.listBooks);

// ... add other book-related routes as needed

module.exports = router;
