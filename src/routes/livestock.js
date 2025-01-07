const express = require('express');
const router = express.Router();
const asyncHandler = require('../utils/asyncHandler');
const { AppError } = require('../middleware/errorHandler');
const db = require('../config/database');

// Cattle (Nautgripir)
router.get('/cattle', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      SUM(CASE WHEN k.Kvikfje_nr = 1 THEN k.Fjoldi ELSE 0 END) as cows,
      SUM(CASE WHEN k.Kvikfje_nr = 2 THEN k.Fjoldi ELSE 0 END) as heifers,
      SUM(CASE WHEN k.Kvikfje_nr = 3 THEN k.Fjoldi ELSE 0 END) as dry_cattle,
      SUM(CASE WHEN k.Kvikfje_nr = 4 THEN k.Fjoldi ELSE 0 END) as calves
    FROM jb_kvikfje k
    WHERE k.Kvikfje_nr BETWEEN 1 AND 4
  `);

  res.json({
    status: 'success',
    data: rows[0]
  });
}));

// Sheep (Sauðfé)
router.get('/sheep', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      SUM(CASE WHEN k.Kvikfje_nr = 5 THEN k.Fjoldi ELSE 0 END) as ewes,
      SUM(CASE WHEN k.Kvikfje_nr = 6 THEN k.Fjoldi ELSE 0 END) as rams,
      SUM(CASE WHEN k.Kvikfje_nr = 7 THEN k.Fjoldi ELSE 0 END) as yearling_sheep,
      SUM(CASE WHEN k.Kvikfje_nr = 8 THEN k.Fjoldi ELSE 0 END) as lambs
    FROM jb_kvikfje k
    WHERE k.Kvikfje_nr BETWEEN 5 AND 8
  `);

  res.json({
    status: 'success',
    data: rows[0]
  });
}));

// Goats (Geitfé)
router.get('/goats', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      SUM(CASE WHEN k.Kvikfje_nr = 9 THEN k.Fjoldi ELSE 0 END) as goats,
      SUM(CASE WHEN k.Kvikfje_nr = 10 THEN k.Fjoldi ELSE 0 END) as bucks,
      SUM(CASE WHEN k.Kvikfje_nr = 11 THEN k.Fjoldi ELSE 0 END) as yearling_goats,
      SUM(CASE WHEN k.Kvikfje_nr = 12 THEN k.Fjoldi ELSE 0 END) as kids
    FROM jb_kvikfje k
    WHERE k.Kvikfje_nr BETWEEN 9 AND 12
  `);

  res.json({
    status: 'success',
    data: rows[0]
  });
}));

// Horses (Hestar)
router.get('/horses', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      SUM(CASE WHEN k.Kvikfje_nr = 13 THEN k.Fjoldi ELSE 0 END) as stallions_geldings,
      SUM(CASE WHEN k.Kvikfje_nr = 14 THEN k.Fjoldi ELSE 0 END) as mares,
      SUM(CASE WHEN k.Kvikfje_nr = 15 THEN k.Fjoldi ELSE 0 END) as young_horses
    FROM jb_kvikfje k
    WHERE k.Kvikfje_nr BETWEEN 13 AND 15
  `);

  res.json({
    status: 'success',
    data: rows[0]
  });
}));

// Livestock owners (Eigendur búfjár)
router.get('/owners', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      e.Einst_nr,
      e.Fullt_nafn,
      COUNT(DISTINCT k.Kvikfje_nr) as livestock_types,
      SUM(k.Fjoldi) as total_animals
    FROM 1703_einstaklingar e
    JOIN jb_kvikfje k ON e.Einst_nr = k.Byli_nr
    GROUP BY e.Einst_nr, e.Fullt_nafn
    ORDER BY total_animals DESC
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Livestock value (Verðmæti búfjár)
router.get('/value', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      kf.Kvikfe_nr,
      kf.Lysing as livestock_type,
      kf.Verd as unit_value,
      SUM(k.Fjoldi) as count,
      SUM(k.Fjoldi * kf.Verd) as total_value
    FROM jb_kvikfje k
    JOIN kft_kvikfjar_flokkar kf ON k.Kvikfje_nr = kf.Kvikfe_nr
    GROUP BY kf.Kvikfe_nr, kf.Lysing, kf.Verd
    ORDER BY total_value DESC
  `);

  // Calculate total value of all livestock
  const totalValue = rows.reduce((sum, row) => sum + (row.total_value || 0), 0);

  res.json({
    status: 'success',
    data: {
      total_value: totalValue,
      breakdown: rows
    }
  });
}));

// Summary statistics
router.get('/summary', asyncHandler(async (req, res) => {
  const [totals] = await db.execute(`
    SELECT 
      SUM(CASE WHEN k.Kvikfje_nr BETWEEN 1 AND 4 THEN k.Fjoldi ELSE 0 END) as total_cattle,
      SUM(CASE WHEN k.Kvikfje_nr BETWEEN 5 AND 8 THEN k.Fjoldi ELSE 0 END) as total_sheep,
      SUM(CASE WHEN k.Kvikfje_nr BETWEEN 9 AND 12 THEN k.Fjoldi ELSE 0 END) as total_goats,
      SUM(CASE WHEN k.Kvikfje_nr BETWEEN 13 AND 15 THEN k.Fjoldi ELSE 0 END) as total_horses,
      COUNT(DISTINCT k.Byli_nr) as total_owners
    FROM jb_kvikfje k
  `);

  res.json({
    status: 'success',
    data: totals[0]
  });
}));

module.exports = router; 