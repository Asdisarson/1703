const express = require('express');
const router = express.Router();
const farmStatisticsController = require('../controllers/farmStatisticsController');

// Farm Occupancy
router.get('/occupancy', farmStatisticsController.getFarmOccupancy);

// Rental Terms
router.get('/rental-terms', farmStatisticsController.getRentalTerms);

// Property Information
router.get('/property-types', farmStatisticsController.getPropertyTypes);
router.get('/property-values', farmStatisticsController.getPropertyValues);

// Ownership Information
router.get('/ownership', farmStatisticsController.getOwnership);
router.get('/distribution', farmStatisticsController.getPropertyDistribution);

// Detailed Farm Information
router.get('/:byliNr', farmStatisticsController.getDetailedFarmInfo);

module.exports = router; 