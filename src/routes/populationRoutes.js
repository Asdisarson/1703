const express = require('express');
const router = express.Router();

// Import controllers
const populationController = require('../controllers/populationController');

router.get('/total', populationController.getTotal);
router.get('/by-district', populationController.getByDistrict);
router.get('/by-county', populationController.getByCounty);

module.exports = router; 