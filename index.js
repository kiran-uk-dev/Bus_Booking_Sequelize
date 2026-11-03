const express = require('express');
const sequelize = require('./utils/database');
require('./models/User');
require('./models/Bus');
require('./models/Booking');


const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

app.get('/', (req, res) => {
    res.send('Bus Booking API is running');
});

async function startServer() {
    try {
        await sequelize.authenticate();

        console.log('MySQL Connected Successfully');

        await sequelize.sync();

        console.log('All tables created successfully');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Database Error:', error.message);
    }
}

startServer();