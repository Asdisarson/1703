const express = require('express');
const router = express.Router();

// Import controllers
const farmsController = require('../controllers/farmsController');

router.get('/occupancy', farmsController.getOccupancyStats);
router.get('/rental-terms', farmsController.getRentalTermsStats);
router.get('/property-types', farmsController.getPropertyTypeStats);
router.get('/property-values', farmsController.getPropertyValueStats);
router.get('/ownership', farmsController.getOwnershipStats);
router.get('/distribution', farmsController.getDistributionStats);
router.get('/:byliNr', farmsController.getFarmDetails);

module.exports = router; 