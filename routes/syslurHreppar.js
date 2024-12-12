const express = require('express');
const router = express.Router();
const mockData = require('../mocks/syslurHreppar');
const SyslurHreppar = require('../models/SyslurHreppar');

// GET all sysla-hreppur relationships
router.get('/', (req, res) => {
    const relationships = mockData.map(data => new SyslurHreppar(data));
    res.json(relationships);
});

// GET by sysla ID
router.get('/sysla/:syslaId', (req, res) => {
    const relationships = mockData
        .filter(d => d.sysla_id === parseInt(req.params.syslaId))
        .map(data => new SyslurHreppar(data));
    res.json(relationships);
});

// GET by hreppur ID
router.get('/hreppur/:hreppurId', (req, res) => {
    const relationship = mockData.find(d => d.main_id === parseInt(req.params.hreppurId));
    if (!relationship) {
        return res.status(404).json({ message: 'Relationship not found' });
    }
    res.json(new SyslurHreppar(relationship));
});

module.exports = router; 