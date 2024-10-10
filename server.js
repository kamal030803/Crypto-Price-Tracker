require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const fetchPrices = require('./jobs/fetchPrices');

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', require('./routes/stats'));
app.use('/', require('./routes/deviation'));

fetchPrices();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));