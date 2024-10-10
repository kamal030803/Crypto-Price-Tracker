const express = require('express');
const Crypto = require('../models/Crypto');
const router = express.Router();

router.get('/deviation', async (req, res) => {
  const { coin } = req.query;
  try {
    const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
    if (records.length < 2) {
      return res.status(400).json({ message: 'Not enough data to calculate standard deviation' });
    }

    const prices = records.map(record => record.price);
    const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
    const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
    const standardDeviation = Math.sqrt(variance).toFixed(2);

    res.json({ deviation: parseFloat(standardDeviation) });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;