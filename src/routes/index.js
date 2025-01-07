const express = require('express');
const router = express.Router();
const asyncHandler = require('../utils/asyncHandler');
const { AppError } = require('../middleware/errorHandler');
const db = require('../config/database');
const logger = require('../config/logger');
const demographicsRoutes = require('./demographics');
const propertiesRoutes = require('./properties');
const livestockRoutes = require('./livestock');

// Demographics routes
router.use('/demographics', demographicsRoutes);

// Properties routes
router.use('/properties', propertiesRoutes);

// Livestock routes
router.use('/livestock', livestockRoutes);

// Get all individuals with pagination
router.get('/individuals', asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const [rows, fields] = await db.execute(
    'SELECT * FROM 1703_einstaklingar LIMIT ? OFFSET ?',
    [limit, offset]
  );

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Get individual by ID
router.get('/individuals/:id', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(
    'SELECT * FROM 1703_einstaklingar WHERE Einst_nr = ?',
    [req.params.id]
  );

  if (!rows.length) {
    throw new AppError(404, 'Individual not found');
  }

  res.json({
    status: 'success',
    data: rows[0]
  });
}));

// Get all households with pagination
router.get('/households', asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const [rows] = await db.execute(
    'SELECT * FROM 1703_heimili LIMIT ? OFFSET ?',
    [limit, offset]
  );

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Get household by ID
router.get('/households/:id', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(
    'SELECT * FROM 1703_heimili WHERE Heimili_nr = ?',
    [req.params.id]
  );

  if (!rows.length) {
    throw new AppError(404, 'Household not found');
  }

  res.json({
    status: 'success',
    data: rows[0]
  });
}));

// Get household members
router.get('/households/:id/members', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(
    `SELECT e.* 
     FROM 1703_manntal m 
     JOIN 1703_einstaklingar e ON m.Einst_nr = e.Einst_nr 
     WHERE m.Heimili_nr = ?`,
    [req.params.id]
  );

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Get statistics
router.get('/statistics', asyncHandler(async (req, res) => {
  const [individuals] = await db.execute('SELECT COUNT(*) as count FROM 1703_einstaklingar');
  const [households] = await db.execute('SELECT COUNT(*) as count FROM 1703_heimili');
  const [genderStats] = await db.execute(
    'SELECT Kyn, COUNT(*) as count FROM 1703_einstaklingar GROUP BY Kyn'
  );

  res.json({
    status: 'success',
    data: {
      totalIndividuals: individuals[0].count,
      totalHouseholds: households[0].count,
      genderDistribution: genderStats
    }
  });
}));

module.exports = router; 