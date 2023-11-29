// controllers/bookController.js
const Book = require('../models/Book');

exports.createBook = async (req, res) => {
    try {
        const { title, author, edition, isbn, description } = req.body;
        const book = await Book.create({
            title,
            author,
            edition,
            isbn,
            description
        });
        res.status(201).send(book);
    } catch (error) {
        res.status(500).send({ message: 'Error creating book.', error });
    }
};



exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.bookId);
        if (!book) {
            return res.status(404).send({ message: 'Book not found.' });
        }
        res.send(book);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching book.', error });
    }
};



exports.updateBook = async (req, res) => {
    try {
        const { title, author, edition, isbn, description } = req.body;
        const book = await Book.findByPk(req.params.bookId);
        if (!book) {
            return res.status(404).send({ message: 'Book not found.' });
        }

        book.title = title;
        book.author = author;
        book.edition = edition;
        book.isbn = isbn;
        book.description = description;

        await book.save();
        res.send(book);
    } catch (error) {
        res.status(500).send({ message: 'Error updating book.', error });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.bookId);
        if (!book) {
            return res.status(404).send({ message: 'Book not found.' });
        }

        await book.destroy();
        res.send({ message: 'Book deleted successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting book.', error });
    }
};

exports.listBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.send(books);
    } catch (error) {
        res.status(500).send({ message: 'Error listing books.', error });
    }
};




// ... other controller functions as needed
