const express = require('express');
const router = express.Router();
const mockData = require('../mocks/byliEinstaklingar');
const ByliEinstaklingar = require('../models/ByliEinstaklingar');

// GET all individuals
router.get('/', (req, res) => {
    const individuals = mockData.map(data => new ByliEinstaklingar(data));
    res.json(individuals);
});

// GET individual by ID
router.get('/:id', (req, res) => {
    const individual = mockData.find(d => d.einstaklingur_id === parseInt(req.params.id));
    if (!individual) {
        return res.status(404).json({ message: 'Individual not found' });
    }
    res.json(new ByliEinstaklingar(individual));
});

// GET individuals by farm ID
router.get('/byli/:byliId', (req, res) => {
    const individuals = mockData
        .filter(d => d.byli_id === parseInt(req.params.byliId))
        .map(data => new ByliEinstaklingar(data));
    res.json(individuals);
});

module.exports = router; 