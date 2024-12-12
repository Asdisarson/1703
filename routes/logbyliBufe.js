const express = require('express');
const router = express.Router();
const mockData = require('../mocks/logbyliBufe1703');
const LogbyliBufe1703 = require('../models/LogbyliBufe1703');
const logger = require('../config/logger');

// GET all livestock data
router.get('/', (req, res) => {
    logger.info('Fetching all livestock data');
    try {
        const livestock = mockData.map(data => new LogbyliBufe1703(data));
        logger.debug(`Retrieved ${livestock.length} livestock records`);
        res.json(livestock);
    } catch (error) {
        logger.error('Error fetching livestock data:', error);
        res.status(500).json({ error: 'Error fetching livestock data' });
    }
});

// GET livestock data by logbyli ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    logger.info(`Fetching livestock data for logbyli ID: ${id}`);
    
    try {
        const livestock = mockData.find(d => d.logbyli_id === id);
        if (!livestock) {
            logger.warn(`No livestock data found for logbyli ID: ${id}`);
            return res.status(404).json({ message: 'Livestock data not found' });
        }
        res.json(new LogbyliBufe1703(livestock));
    } catch (error) {
        logger.error(`Error fetching livestock data for ID ${id}:`, error);
        res.status(500).json({ error: 'Error fetching livestock data' });
    }
});

// GET total livestock summary
router.get('/summary/total', (req, res) => {
    logger.info('Calculating total livestock summary');
    try {
        const totals = mockData.reduce((acc, curr) => {
            Object.keys(curr).forEach(key => {
                if (key !== 'logbyli_id' && typeof curr[key] === 'number') {
                    acc[key] = (acc[key] || 0) + curr[key];
                }
            });
            return acc;
        }, {});
        logger.debug('Livestock summary calculated successfully');
        res.json(totals);
    } catch (error) {
        logger.error('Error calculating livestock summary:', error);
        res.status(500).json({ error: 'Error calculating livestock summary' });
    }
});

module.exports = router; 