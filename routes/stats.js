const express = require('express');
const Crypto = require('../models/Crypto');
const router = express.Router();

router.get('/stats', async (req, res) => {
  const { coin } = req.query;
  try {
    const latestData = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
    if (!latestData) {
      return res.status(404).json({ message: 'Data not found for the requested cryptocurrency' });
    }
    const { price, marketCap, change24h } = latestData;
    res.json({ price, marketCap, change24h });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;