// models/User.js
const bcrypt = require('bcryptjs');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dataConfig')


class User extends Model {
    validPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: false,
    underscored: true
});

module.exports = User;
