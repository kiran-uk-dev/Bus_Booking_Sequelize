const sequelize = require('./utils/database');

const User = require('./models/User');
const Bus = require('./models/Bus');



async function insertData() {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');

        await sequelize.sync();

        
        await User.create({
            name: 'Sagar Rawat',
            email: 'sagar@example.com',
            age: 25
        });

        await User.create({
            name: 'Rahul Sharma',
            email: 'rahul@example.com',
            age: 28
        });

        await User.create({
            name: 'Priya Singh',
            email: 'priya@example.com',
            age: 24
        });

        console.log('3 users inserted successfully');

      
        await Bus.create({
            busNumber: 'PB01AB1234',
            source: 'Jalandhar',
            destination: 'Delhi',
            departureTime: new Date('2026-11-10T08:00:00'),
            totalSeats: 40,
            availableSeats: 25
        });

        await Bus.create({
            busNumber: 'PB02CD5678',
            source: 'Amritsar',
            destination: 'Chandigarh',
            departureTime: new Date('2026-11-11T09:00:00'),
            totalSeats: 40,
            availableSeats: 8
        });

        console.log('2 buses inserted successfully');

    } catch (error) {
        console.error('Error inserting data:', error.message);
    } finally {
        await sequelize.close();
    }
}

insertData();