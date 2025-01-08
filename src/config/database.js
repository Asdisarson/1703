const mysql = require('mysql2/promise');
const logger = require('./logger');
const mockDataService = require('../services/mockDataService');
require('dotenv').config();

let pool;
let useMockData = false;

const createPool = () => {
  return mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
    ssl: {
      rejectUnauthorized: false
    }
  });
};

const testConnection = async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
      logger.level = 'debug';
      logger.debug('Running in development mode with debug logging enabled');
    }

    pool = createPool();
    const connection = await pool.getConnection();
    logger.info('Database connected successfully');
    connection.release();
    useMockData = false;

    return true;
  } catch (error) {
    logger.error('Database connection failed:', error.message);
    
    if (process.env.NODE_ENV === 'production') {
      logger.error('Production environment requires database connection');
      process.exit(1);
    }

    logger.warn('Falling back to mock data service');
    useMockData = true;
    return false;
  }
};

const execute = async (...args) => {
  if (useMockData) {
    logger.debug('Using mock data service for query:', args[0]);
    return mockDataService.execute(...args);
  }

  try {
    return await pool.execute(...args);
  } catch (error) {
    logger.error('Database query failed:', error.message);
    if (process.env.NODE_ENV === 'development') {
      logger.debug('Falling back to mock data for failed query');
      return mockDataService.execute(...args);
    }
    throw error;
  }
};

const getConnection = async () => {
  if (useMockData) {
    return mockDataService;
  }
  return pool.getConnection();
};

module.exports = {
  testConnection,
  execute,
  getConnection,
  isMockData: () => useMockData
}; 