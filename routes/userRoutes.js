const express = require('express');
const router = express.Router();

const User = require('../models/User');

// POST /users - Add new user
router.post('/', async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const user = await User.create({
            name,
            email,
            age
        });

        res.status(201).json({
            message: 'User added successfully',
            data: user
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// GET /users - Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json({
            message: 'Users fetched successfully',
            data: users
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;