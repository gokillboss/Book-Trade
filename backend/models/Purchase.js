const sequelize = require('../config/dataConfig')
const { Model, DataTypes } = require('sequelize');


const Purchase = sequelize.define('Purchase', {
  purchase_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  buyer_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Users',
          key: 'user_id'
      }
  },
  listing_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Listings',
          key: 'listing_id'
      }
  },
  date_purchased: {
      type: DataTypes.DATE,
  }
}, {
    timestamps: false,
  });

module.exports = Purchase;
