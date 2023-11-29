// routes/tradeRoutes.js
const express = require('express');
const tradeController = require('../controllers/tradeController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Create a new trade
router.post('/create', isAuthenticated, tradeController.createTrade);

// Get a specific trade by its ID
router.get('/:tradeId', tradeController.getTradeById);

// Update a specific trade by its ID - requires authentication middleware
router.put('/:tradeId/update', isAuthenticated, tradeController.updateTrade);

// Delete a specific trade by its ID - requires authentication middleware
router.delete('/:tradeId/delete', isAuthenticated, tradeController.deleteTrade);

// List all trades (could add pagination, filtering, etc.)
router.get('/list', tradeController.listTrades);

// ... add other trade-related routes as needed

module.exports = router;
