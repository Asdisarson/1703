const express = require('express');
const router = express.Router();
const individualController = require('../controllers/individualController');

router.get('/', individualController.getAllIndividuals);
router.get('/age', individualController.getIndividualsByAge);
router.get('/gender', individualController.getIndividualsByGender);
router.get('/:id', individualController.getIndividual);

module.exports = router; 