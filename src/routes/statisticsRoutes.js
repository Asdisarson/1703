const express = require('express');
const router = express.Router();

// Import controllers
const statisticsController = require('../controllers/statisticsController');

router.get('/demographics/age-gender', statisticsController.getAgeGenderStats);
router.get('/demographics/marital-status', statisticsController.getMaritalStatusStats);
router.get('/households/sizes', statisticsController.getHouseholdSizeStats);
router.get('/households/types', statisticsController.getHouseholdTypeStats);
router.get('/status/household', statisticsController.getHouseholdStatusStats);
router.get('/status/occupational', statisticsController.getOccupationalStats);

module.exports = router; 