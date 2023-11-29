// controllers/listingController.js
const Listing = require('../models/Listing');

exports.createListing = async (req, res) => {
    try {
        const { user_id, book_id, price, trade_option, book_condition, date_posted } = req.body;
        const listing = await Listing.create({
            user_id,
            book_id,
            price,
            trade_option,
            book_condition,
            date_posted
        });
        res.status(201).send(listing);
    } catch (error) {
        res.status(500).send({ message: 'Error creating listing.', error });
    }
};

exports.getListingById = async (req, res) => {
    try {
        const listing = await Listing.findByPk(req.params.listingId);
        if (!listing) {
            return res.status(404).send({ message: 'Listing not found.' });
        }
        res.send(listing);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching listing.', error });
    }
};

exports.updateListing = async (req, res) => {
    try {
        const { user_id, book_id, price, trade_option, book_condition, date_posted } = req.body;
        const listing = await Listing.findByPk(req.params.listingId);
        if (!listing) {
            return res.status(404).send({ message: 'Listing not found.' });
        }

        listing.user_id = user_id;
        listing.book_id = book_id;
        listing.price = price;
        listing.trade_option = trade_option;
        listing.book_condition = book_condition;
        listing.date_posted = date_posted;

        await listing.save();
        res.send(listing);
    } catch (error) {
        res.status(500).send({ message: 'Error updating listing.', error });
    }
};

exports.deleteListing = async (req, res) => {
    try {
        const listing = await Listing.findByPk(req.params.listingId);
        if (!listing) {
            return res.status(404).send({ message: 'Listing not found.' });
        }

        await listing.destroy();
        res.send({ message: 'Listing deleted successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting listing.', error });
    }
};

exports.listListings = async (req, res) => {
    try {
        const listings = await Listing.findAll();
        res.send(listings);
    } catch (error) {
        res.status(500).send({ message: 'Error listing listings.', error });
    }
};

// ... other controller functions as needed
// controllers/listingController.js
