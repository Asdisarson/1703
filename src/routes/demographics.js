const express = require('express');
const router = express.Router();
const asyncHandler = require('../utils/asyncHandler');
const { AppError } = require('../middleware/errorHandler');
const db = require('../config/database');

// Population by district (hreppur)
router.get('/population/districts', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT h.Hreppur_nr, hn.Hreppur_nafn, COUNT(m.Einst_nr) as population
    FROM 1703_hreppar h
    LEFT JOIN 1703_hreppar_nofn hn ON h.Hreppur_nr = hn.Hreppur_nr
    LEFT JOIN 1703_heimili hm ON h.Hreppur_nr = hm.Hreppur_nr
    LEFT JOIN 1703_manntal m ON hm.Heimili_nr = m.Heimili_nr
    GROUP BY h.Hreppur_nr, hn.Hreppur_nafn
    ORDER BY h.Hreppur_nr
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Population by county (sýsla)
router.get('/population/counties', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT s.Sysla_nr, s.Sysla_nafn_langt as county_name, COUNT(m.Einst_nr) as population
    FROM 1703_syslur s
    LEFT JOIN 1703_hreppar h ON s.Sysla_nr = h.Sysla_nr
    LEFT JOIN 1703_heimili hm ON h.Hreppur_nr = hm.Hreppur_nr
    LEFT JOIN 1703_manntal m ON hm.Heimili_nr = m.Heimili_nr
    GROUP BY s.Sysla_nr, s.Sysla_nafn_langt
    ORDER BY s.Sysla_nr
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Population by gender and age groups
router.get('/population/age-gender', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      e.Kyn_txt as gender,
      CASE 
        WHEN e.Aldur < 16 THEN '0-15'
        WHEN e.Aldur BETWEEN 16 AND 25 THEN '16-25'
        WHEN e.Aldur BETWEEN 26 AND 40 THEN '26-40'
        WHEN e.Aldur BETWEEN 41 AND 60 THEN '41-60'
        ELSE '60+'
      END as age_group,
      COUNT(*) as count
    FROM 1703_einstaklingar e
    WHERE e.Aldur IS NOT NULL
    GROUP BY gender, age_group
    ORDER BY gender, age_group
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Marital status
router.get('/marital-status', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      CASE 
        WHEN m.Lysing LIKE '%gift%' THEN 'Gift(ur)'
        WHEN m.Lysing LIKE '%ekkj%' THEN 'Ekkja / ekkill'
        WHEN m.Lysing LIKE '%ógift%' THEN 'Ógift(ur)'
        WHEN m.Lysing LIKE '%sambúð%' THEN 'Í sambúð'
        ELSE 'Óviss'
      END as marital_status,
      COUNT(*) as count
    FROM 1703_manntal m
    GROUP BY marital_status
    ORDER BY count DESC
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Households by size
router.get('/households/size', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      household_size,
      COUNT(*) as count
    FROM (
      SELECT 
        h.Heimili_nr,
        COUNT(m.Einst_nr) as household_size
      FROM 1703_heimili h
      LEFT JOIN 1703_manntal m ON h.Heimili_nr = m.Heimili_nr
      GROUP BY h.Heimili_nr
    ) as household_sizes
    GROUP BY household_size
    ORDER BY household_size
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Households by type
router.get('/households/type', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      CASE 
        WHEN h.Er_heimili = 'Já' AND l.Er_logbyli = 'Já' THEN 'Heimili á lögbýlum'
        WHEN h.Er_heimili = 'Já' AND l.Er_logbyli = 'Nei' THEN 'Heimili í hjáleigum'
        WHEN m.Lysing LIKE '%þurrabúð%' THEN 'Heimili þurrabúðarmanna'
        WHEN m.Lysing LIKE '%húsfólk%' THEN 'Heimili húsfólks'
        WHEN m.Lysing LIKE '%fátæk%' THEN 'Fátækrahús'
        WHEN m.Lysing LIKE '%stofnun%' THEN 'Stofnanaheimili'
        ELSE 'Annað'
      END as household_type,
      COUNT(DISTINCT h.Heimili_nr) as count
    FROM 1703_heimili h
    LEFT JOIN 1703_byli b ON h.Byli_nr = b.Byli_nr
    LEFT JOIN 1703_logbyli l ON b.Logbyli_nr = l.Logbyli_nr
    LEFT JOIN 1703_manntal m ON h.Heimili_nr = m.Heimili_nr
    GROUP BY household_type
    ORDER BY count DESC
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Household heads (húsráðendur)
router.get('/households/heads', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      e.Kyn_txt as gender,
      COUNT(*) as count,
      ROUND(AVG(e.Aldur), 1) as average_age
    FROM 1703_heimili h
    JOIN 1703_einstaklingar e ON h.Husradandi_einst_nr = e.Einst_nr
    WHERE h.Husmadur = 'Já'
    GROUP BY e.Kyn_txt
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Household status
router.get('/household-status', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      m.Lysing as household_status,
      COUNT(*) as count
    FROM 1703_manntal m
    WHERE m.Lysing IS NOT NULL
    GROUP BY m.Lysing
    ORDER BY count DESC
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Occupational status
router.get('/occupational-status', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      m.Lysing as occupation,
      COUNT(*) as count
    FROM 1703_manntal m
    WHERE m.Lysing LIKE '%vinna%' 
      OR m.Lysing LIKE '%bóndi%'
      OR m.Lysing LIKE '%verk%'
    GROUP BY m.Lysing
    ORDER BY count DESC
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

module.exports = router; 