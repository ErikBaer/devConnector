const express = require('express');
const connectDB = require('./config/db');

const app = express();

//COnnect to Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Define Routes

app.use('/api/users', require('.routes/api/users'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server startet on Port ${PORT}`));