const sequelize = require('../config/dataConfig');
const { Model, DataTypes } = require('sequelize');

// Define the Genre model
const Genre = sequelize.define('Genres', {
    genre_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
});

// Define the BookGenre model (junction table)
const BookGenre = sequelize.define('BookGenres', {
    bookId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Books',
            key: 'book_id'
        }
    },
    genreId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Genres',
            key: 'genre_id'
        }
    }
}, {
    timestamps: false
});

const Book = sequelize.define('Books', {
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Removed the genre field since we'll use the many-to-many relation
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
});

// Setup the many-to-many relationship between Books and Genres through BookGenre
Book.belongsToMany(Genre, { through: BookGenre, foreignKey: 'bookId', otherKey: 'genreId' });
Genre.belongsToMany(Book, { through: BookGenre, foreignKey: 'genreId', otherKey: 'bookId' });

module.exports = { Book, Genre, BookGenre };
