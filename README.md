# Crypto-Price-Tracker
# Crypto Price Tracker

Crypto Price Tracker is a Node.js-based application that tracks the price, market cap, and 24-hour change for selected cryptocurrencies. The data is fetched every two hours and stored in MongoDB, providing easy access to statistics and price deviation.

## Features

- Background job to fetch cryptocurrency data every 2 hours from CoinGecko.
- API endpoints:
  - `/stats`: Get the latest price, market cap, and 24-hour change.
  - `/deviation`: Get the price standard deviation for the last 100 records.

## Technologies Used

- **Node.js**, **Express**, **MongoDB**, **Mongoose**
- **Axios** for API requests
- **Node-cron** for scheduling tasks

## Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd crypto-price-tracker
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```
   MONGO_URI=mongodb+srv://kanand032003:8sdzFQtpkNebeFEP@cryptotracker.2watj.mongodb.net/
   PORT=5000
   ```

4. **Start MongoDB**
   ```bash
   mongod
   ```

5. **Run the Application**
   ```bash
   npm start
   ```

## Usage

- **Get Latest Stats**: `/stats?coin=bitcoin`
  ```bash
  curl http://localhost:5000/stats?coin=bitcoin
  ```
- **Get Price Standard Deviation**: `/deviation?coin=bitcoin`
  ```bash
  curl http://localhost:5000/deviation?coin=bitcoin
  ```