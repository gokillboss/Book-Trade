// controllers/purchaseController.js
const Purchase = require('../models/Purchase');

exports.createPurchase = async (req, res) => {
    try {
        const { buyer_id, listing_id, date_purchased } = req.body;
        const purchase = await Purchase.create({
            buyer_id,
            listing_id,
            date_purchased
        });
        res.status(201).send(purchase);
    } catch (error) {
        res.status(500).send({ message: 'Error creating purchase.', error });
    }
};

exports.getPurchaseById = async (req, res) => {
    try {
        const purchase = await Purchase.findByPk(req.params.purchaseId);
        if (!purchase) {
            return res.status(404).send({ message: 'Purchase not found.' });
        }
        res.send(purchase);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching purchase.', error });
    }
};

exports.updatePurchase = async (req, res) => {
    try {
        const { buyer_id, listing_id, date_purchased } = req.body;
        const purchase = await Purchase.findByPk(req.params.purchaseId);
        if (!purchase) {
            return res.status(404).send({ message: 'Purchase not found.' });
        }

        purchase.buyer_id = buyer_id;
        purchase.listing_id = listing_id;
        purchase.date_purchased = date_purchased;

        await purchase.save();
        res.send(purchase);
    } catch (error) {
        res.status(500).send({ message: 'Error updating purchase.', error });
    }
};

exports.deletePurchase = async (req, res) => {
    try {
        const purchase = await Purchase.findByPk(req.params.purchaseId);
        if (!purchase) {
            return res.status(404).send({ message: 'Purchase not found.' });
        }

        await purchase.destroy();
        res.send({ message: 'Purchase deleted successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting purchase.', error });
    }
};

exports.listPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.findAll();
        res.send(purchases);
    } catch (error) {
        res.status(500).send({ message: 'Error listing purchases.', error });
    }
};

// ... other controller functions as needed
