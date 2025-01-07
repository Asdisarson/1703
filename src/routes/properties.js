const express = require('express');
const router = express.Router();
const asyncHandler = require('../utils/asyncHandler');
const { AppError } = require('../middleware/errorHandler');
const db = require('../config/database');

// Land occupancy (Ábúð jarða)
router.get('/occupancy', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      SUM(CASE WHEN a.Abudarflokkur_nr = 1 THEN 1 ELSE 0 END) as inhabited,
      SUM(CASE WHEN a.Abudarflokkur_nr = 2 THEN 1 ELSE 0 END) as abandoned,
      SUM(CASE WHEN a.Abudarflokkur_nr = 3 THEN 1 ELSE 0 END) as owner_occupied,
      SUM(CASE WHEN a.Abudarflokkur_nr = 4 THEN 1 ELSE 0 END) as tenant_occupied
    FROM 1703_abud a
  `);

  res.json({
    status: 'success',
    data: rows[0]
  });
}));

// Rental terms (Leigukjör jarða)
router.get('/rental-terms', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      l.Landskuld as land_rent,
      k.Kugildi as livestock_units,
      m.Lysing as obligations
    FROM 1703_landskuld l
    LEFT JOIN 1703_kugildi k ON l.Abud_nr = k.Abud_nr
    LEFT JOIN 1703_manntal m ON l.Abud_nr = m.Tilfelli_nr
    WHERE m.Lysing LIKE '%kvöð%'
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Property types (Tegund býla og bústaða)
router.get('/property-types', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      SUM(CASE WHEN l.Er_logbyli = 'Já' THEN 1 ELSE 0 END) as logbyli_count,
      SUM(CASE WHEN b.Tilheyrir_byli_nr IS NOT NULL THEN 1 ELSE 0 END) as hjaleigur_count,
      COUNT(DISTINCT CASE WHEN m.Lysing LIKE '%þurrabúð%' THEN h.Heimili_nr END) as thurrabud_count,
      COUNT(DISTINCT CASE WHEN m.Lysing LIKE '%húsmaður%' THEN h.Heimili_nr END) as husmenn_count
    FROM 1703_byli b
    LEFT JOIN 1703_logbyli l ON b.Logbyli_nr = l.Logbyli_nr
    LEFT JOIN 1703_heimili h ON b.Byli_nr = h.Byli_nr
    LEFT JOIN 1703_manntal m ON h.Heimili_nr = m.Heimili_nr
  `);

  res.json({
    status: 'success',
    data: rows[0]
  });
}));

// Property value (Dýrleiki jarða)
router.get('/property-value', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      CASE 
        WHEN l.Er_logbyli = 'Já' THEN 'Lögbýli'
        ELSE 'Hjáleiga'
      END as property_type,
      AVG(d.Dyrl_heil_hndr) as average_value,
      MIN(d.Dyrl_heil_hndr) as min_value,
      MAX(d.Dyrl_heil_hndr) as max_value,
      COUNT(*) as count
    FROM 1703_dyrleiki d
    JOIN 1703_byli b ON d.Byli_nr = b.Byli_nr
    LEFT JOIN 1703_logbyli l ON b.Logbyli_nr = l.Logbyli_nr
    GROUP BY property_type
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Property ownership (Eignarhald jarða)
router.get('/ownership', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      CASE 
        WHEN a.Ad_flokkur_nr = 1 THEN 'Konungseign'
        WHEN a.Ad_flokkur_nr = 2 THEN 'Eign Hólastóls'
        WHEN a.Ad_flokkur_nr = 3 THEN 'Eign Skálholtsstóls'
        WHEN a.Ad_flokkur_nr = 4 THEN 'Beneficium'
        WHEN a.Ad_flokkur_nr = 5 THEN 'Bændakirkja'
        WHEN a.Ad_flokkur_nr = 6 THEN 'Einkaeign'
        ELSE 'Annað'
      END as ownership_type,
      COUNT(*) as count
    FROM 1703_adilar a
    JOIN 1703_byli_eigandi be ON a.Adili_nr = be.Adili_nr
    GROUP BY ownership_type
  `);

  res.json({
    status: 'success',
    results: rows.length,
    data: rows
  });
}));

// Property distribution (Eignaskipting)
router.get('/distribution', asyncHandler(async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      b.Byli_nr,
      e.Eign_hlutfall * 10 as total_share,
      e.Eign_heil_hndr as land_share,
      k.Kugildi as livestock_share
    FROM 1703_eignir e
    JOIN 1703_byli b ON e.Byli_nr = b.Byli_nr
    LEFT JOIN 1703_kugildi k ON e.Eign_nr = k.Kugildi_nr
  `);

  // Calculate distribution in tenths
  const distribution = rows.reduce((acc, curr) => {
    acc.total_share += curr.total_share || 0;
    acc.land_share += curr.land_share || 0;
    acc.livestock_share += curr.livestock_share || 0;
    return acc;
  }, { total_share: 0, land_share: 0, livestock_share: 0 });

  res.json({
    status: 'success',
    data: {
      total_share: Math.round(distribution.total_share * 10) / 10,
      land_share: Math.round(distribution.land_share * 10) / 10,
      livestock_share: Math.round(distribution.livestock_share * 10) / 10
    }
  });
}));

module.exports = router; 