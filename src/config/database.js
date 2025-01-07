const mysql = require('mysql2/promise');
const logger = require('./logger');
const mockDataService = require('../services/mockDataService');

let pool;
let useMockData = false;

const createPool = async () => {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // Test the connection
    const connection = await pool.getConnection();
    logger.info('Database connected successfully');
    connection.release();
    useMockData = false;
    return pool;
  } catch (error) {
    logger.warn('Database connection failed, using mock data:', error.message);
    useMockData = true;
    return mockDataService;
  }
};

// Initialize the pool
createPool();

// Export a wrapper that handles both real and mock data
module.exports = {
  execute: async (...args) => {
    if (useMockData) {
      return mockDataService.execute(...args);
    }
    try {
      return await pool.execute(...args);
    } catch (error) {
      logger.error('Database query failed, falling back to mock data:', error.message);
      return mockDataService.execute(...args);
    }
  },
  getConnection: async () => {
    if (useMockData) {
      return mockDataService;
    }
    return pool.getConnection();
  }
};