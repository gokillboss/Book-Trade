// routes/listingRoutes.js
const express = require('express');
const listingController = require('../controllers/listingController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Create a new listing
router.post('/create', isAuthenticated, listingController.createListing);

// Get a specific listing by its ID
router.get('/:listingId', listingController.getListingById);

// Update a specific listing by its ID - requires authentication middleware
router.put('/:listingId/update', isAuthenticated, listingController.updateListing);

// Delete a specific listing by its ID - requires authentication middleware
router.delete('/:listingId/delete', isAuthenticated, listingController.deleteListing);

// List all listings (could add pagination, filtering, etc.)
router.get('/list', listingController.listListings);

// ... add other listing-related routes as needed

module.exports = router;
