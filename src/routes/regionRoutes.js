const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

router.get('/counties', regionController.getAllCounties);
router.get('/counties/:id', regionController.getCounty);
router.get('/counties/:countyId/districts', regionController.getDistrictsByCounty);
router.get('/districts/:id', regionController.getDistrictDetails);

module.exports = router; 