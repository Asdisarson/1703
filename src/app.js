const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const errorHandler = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');
const logger = require('./config/logger');

const populationRoutes = require('./routes/populationRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');
const farmsRoutes = require('./routes/farmsRoutes');
const livestockRoutes = require('./routes/livestockRoutes');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));
app.use(rateLimiter);

// Basic middleware
app.use(express.json());
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "1703 Census API Documentation"
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is healthy',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/v1/population', populationRoutes);
app.use('/api/v1/statistics', statisticsRoutes);
app.use('/api/v1/farms', farmsRoutes);
app.use('/api/v1/livestock', livestockRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Export for testing
module.exports = app;

// Start server if not testing
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
    logger.info(`API Documentation available at http://localhost:${PORT}/api-docs`);
  });
} 