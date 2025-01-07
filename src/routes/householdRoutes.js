const express = require('express');
const router = express.Router();
const householdController = require('../controllers/householdController');

router.get('/', householdController.getAllHouseholds);
router.get('/with-residents', householdController.getHouseholdsWithResidents);
router.get('/district/:districtId', householdController.getHouseholdsByDistrict);
router.get('/:id', householdController.getHousehold);

module.exports = router; 