const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Bus = sequelize.define('Bus', {
    busNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departureTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Buses',
    timestamps: false
});

module.exports = Bus;