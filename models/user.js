const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false // Assuming name cannot be null
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // Assuming email cannot be null
        unique: true // Assuming email should be unique
    }
});

module.exports = User;
