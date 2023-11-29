const sequelize = require('../config/dataConfig')
const { Model, DataTypes } = require('sequelize');


const Trade = sequelize.define('Trade', {
  trade_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  listing_id_requester: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Listings',
          key: 'listing_id'
      }
  },
  listing_id_requestee: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Listings',
          key: 'listing_id'
      }
  },
  status: {
      type: DataTypes.STRING,
  }
}, {
    timestamps: false,
  });

module.exports = Trade;
