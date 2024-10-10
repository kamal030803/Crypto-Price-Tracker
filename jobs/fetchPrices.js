const cron = require('node-cron');
const axios = require('axios');
const Crypto = require('../models/Crypto');

const coins = ['bitcoin', 'matic-network', 'ethereum'];

const fetchPrices = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(',')}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );

    const prices = response.data;
    for (let coin of coins) {
      const { usd: price, usd_market_cap: marketCap, usd_24h_change: change24h } = prices[coin];
      await Crypto.create({ coin, price, marketCap, change24h });
    }
    console.log('Prices fetched and stored in database');
  } catch (error) {
    console.error('Error fetching prices', error);
  }
};

// Run every 2 hours
cron.schedule('0 */2 * * *', fetchPrices);

module.exports = fetchPrices;