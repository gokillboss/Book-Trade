// routes/purchaseRoutes.js
const express = require('express');
const purchaseController = require('../controllers/purchaseController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Create a new purchase
router.post('/create', isAuthenticated, purchaseController.createPurchase);

// Get a specific purchase by its ID
router.get('/:purchaseId', purchaseController.getPurchaseById);

// Update a specific purchase by its ID - requires authentication middleware
router.put('/:purchaseId/update', isAuthenticated, purchaseController.updatePurchase);

// Delete a specific purchase by its ID - requires authentication middleware
router.delete('/:purchaseId/delete', isAuthenticated, purchaseController.deletePurchase);

// List all purchases
router.get('/list', purchaseController.listPurchases);

// ... add other purchase-related routes as needed

module.exports = router;
