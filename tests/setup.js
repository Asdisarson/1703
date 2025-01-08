// Set test timeout
jest.setTimeout(30000);

// Mock environment variables
process.env.NODE_ENV = 'test';
process.env.PORT = 3001;

// Database configuration for testing
process.env.DB_HOST = '134.209.198.48';
process.env.DB_USER = '1703';
process.env.DB_PASSWORD = 't2h7sVhf#iVE0oz#';
process.env.DB_NAME = '1703';
process.env.DB_PORT = '3306'; 