const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Booking = sequelize.define('Booking', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    busId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seatsBooked: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending'
    }
}, {
    tableName: 'Bookings',
    timestamps: false
});

module.exports = Booking;