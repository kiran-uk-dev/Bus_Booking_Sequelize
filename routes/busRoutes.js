const express = require('express');
const router = express.Router();

const Bus = require('../models/Bus');

// POST /buses - Add new bus
router.post('/', async (req, res) => {
    try {
        const {
            busNumber,
            source,
            destination,
            departureTime,
            totalSeats,
            availableSeats
        } = req.body;

        const bus = await Bus.create({
            busNumber,
            source,
            destination,
            departureTime,
            totalSeats,
            availableSeats
        });

        res.status(201).json({
            message: 'Bus added successfully',
            data: bus
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// GET /buses/available/:seats
router.get('/available/:seats', async (req, res) => {
    try {
        const seats = Number(req.params.seats);

        if (!Number.isInteger(seats) || seats < 0) {
            return res.status(400).json({
                message: 'Please provide a valid seat number'
            });
        }

        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [require('sequelize').Op.gt]: seats
                }
            }
        });

        res.status(200).json({
            message: 'Available buses fetched successfully',
            data: buses
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;