// controllers/tradeController.js
const Trade = require('../models/Trade');

exports.createTrade = async (req, res) => {
    try {
        const { listing_id_requester, listing_id_requestee, status } = req.body;
        const trade = await Trade.create({
            listing_id_requester,
            listing_id_requestee,
            status
        });
        res.status(201).send(trade);
    } catch (error) {
        res.status(500).send({ message: 'Error creating trade.', error });
    }
};

exports.getTradeById = async (req, res) => {
    try {
        const trade = await Trade.findByPk(req.params.tradeId);
        if (!trade) {
            return res.status(404).send({ message: 'Trade not found.' });
        }
        res.send(trade);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching trade.', error });
    }
};


exports.updateTrade = async (req, res) => {
    try {
        const { listing_id_requester, listing_id_requestee, status } = req.body;
        const trade = await Trade.findByPk(req.params.tradeId);
        if (!trade) {
            return res.status(404).send({ message: 'Trade not found.' });
        }

        trade.listing_id_requester = listing_id_requester;
        trade.listing_id_requestee = listing_id_requestee;
        trade.status = status;

        await trade.save();
        res.send(trade);
    } catch (error) {
        res.status(500).send({ message: 'Error updating trade.', error });
    }
};

exports.deleteTrade = async (req, res) => {
    try {
        const trade = await Trade.findByPk(req.params.tradeId);
        if (!trade) {
            return res.status(404).send({ message: 'Trade not found.' });
        }

        await trade.destroy();
        res.send({ message: 'Trade deleted successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting trade.', error });
    }
};

exports.listTrades = async (req, res) => {
    try {
        const trades = await Trade.findAll();
        res.send(trades);
    } catch (error) {
        res.status(500).send({ message: 'Error listing trades.', error });
    }
};

// ... other controller functions as needed
