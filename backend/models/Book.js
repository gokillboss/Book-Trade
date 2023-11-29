const sequelize = require('../config/dataConfig');
const { Model, DataTypes } = require('sequelize');

const Book = sequelize.define('Books', {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0 // Đảm bảo giá cả là số dương
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true, // Cho phép null nếu bạn muốn hình ảnh không bắt buộc
      validate: {
        isUrl: true // Kiểm tra xem chuỗi có phải là URL hợp lệ không
      }
    }
  }, {
    timestamps: false, // Bạn có thể bật timestamps nếu muốn
  });

module.exports = Book;
