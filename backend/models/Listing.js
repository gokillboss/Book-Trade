const sequelize = require('../config/dataConfig')
const { Model, DataTypes } = require('sequelize');



const Listing = sequelize.define('Listing', {
  listing_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Users',
          key: 'user_id'
      }
  },
  book_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Books',
          key: 'book_id'
      }
  },
  price: {
      type: DataTypes.DECIMAL(10, 2),
  },
  trade_option: {
      type: DataTypes.BOOLEAN,
  },
  book_condition: {
      type: DataTypes.STRING,
  },
  date_posted: {
      type: DataTypes.DATE,
  }
},{
    timestamps: false,
});

module.exports = Listing;
