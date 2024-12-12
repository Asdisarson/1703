const express = require('express');
const router = express.Router();
const mockData = require('../mocks/hreppirDetails');
const HreppirDetails = require('../models/HreppirDetails');

// GET all hreppur details
router.get('/', (req, res) => {
    const details = mockData.map(data => new HreppirDetails(data));
    res.json(details);
});

// GET hreppur details by ID
router.get('/:id', (req, res) => {
    const detail = mockData.find(d => d.hreppur_id === parseInt(req.params.id));
    if (!detail) {
        return res.status(404).json({ message: 'Hreppur details not found' });
    }
    res.json(new HreppirDetails(detail));
});

module.exports = router; 