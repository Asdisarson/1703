const express = require('express');
const router = express.Router();

// Import controllers
const livestockController = require('../controllers/livestockController');

router.get('/cattle', livestockController.getCattleStats);
router.get('/sheep', livestockController.getSheepStats);
router.get('/goats', livestockController.getGoatStats);
router.get('/horses', livestockController.getHorseStats);
router.get('/owners', livestockController.getLivestockOwners);
router.get('/value', livestockController.getLivestockValue);
router.get('/summary', livestockController.getLivestockSummary);

module.exports = router; 