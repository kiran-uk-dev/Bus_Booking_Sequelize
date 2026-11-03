const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Payment = sequelize.define('Payment', {
    bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending'
    }
}, {
    tableName: 'Payments',
    timestamps: false
});

module.exports = Payment;