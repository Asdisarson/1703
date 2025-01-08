const db = require('../config/database');
const { AppError } = require('../middleware/errorHandler');

class Livestock {
  // Cattle Statistics
  static async getCattleStats() {
    const [rows] = await db.execute(`
      SELECT 
        kf.Lysing as type,
        kf.Flokkur as category,
        COUNT(*) as count,
        SUM(kf.Verd) as total_value
      FROM 1703_manntal m
      JOIN kft_eignir ke ON m.Tilfelli_nr = ke.Faersla_nr
      JOIN kft_kvikfjar_flokkar kf ON ke.Kvikfe_nr = kf.Kvikfe_nr
      WHERE kf.Kvikfe_nr BETWEEN 1 AND 4
      GROUP BY kf.Lysing, kf.Flokkur
      ORDER BY kf.Kvikfe_nr
    `);
    return {
      total: rows.reduce((acc, curr) => acc + curr.count, 0),
      details: rows
    };
  }

  // Sheep Statistics
  static async getSheepStats() {
    const [rows] = await db.execute(`
      SELECT 
        kf.Lysing as type,
        kf.Flokkur as category,
        COUNT(*) as count,
        SUM(kf.Verd) as total_value
      FROM 1703_manntal m
      JOIN kft_eignir ke ON m.Tilfelli_nr = ke.Faersla_nr
      JOIN kft_kvikfjar_flokkar kf ON ke.Kvikfe_nr = kf.Kvikfe_nr
      WHERE kf.Kvikfe_nr BETWEEN 5 AND 8
      GROUP BY kf.Lysing, kf.Flokkur
      ORDER BY kf.Kvikfe_nr
    `);
    return {
      total: rows.reduce((acc, curr) => acc + curr.count, 0),
      details: rows
    };
  }

  // Goat Statistics
  static async getGoatStats() {
    const [rows] = await db.execute(`
      SELECT 
        kf.Lysing as type,
        kf.Flokkur as category,
        COUNT(*) as count,
        SUM(kf.Verd) as total_value
      FROM 1703_manntal m
      JOIN kft_eignir ke ON m.Tilfelli_nr = ke.Faersla_nr
      JOIN kft_kvikfjar_flokkar kf ON ke.Kvikfe_nr = kf.Kvikfe_nr
      WHERE kf.Kvikfe_nr BETWEEN 9 AND 12
      GROUP BY kf.Lysing, kf.Flokkur
      ORDER BY kf.Kvikfe_nr
    `);
    return {
      total: rows.reduce((acc, curr) => acc + curr.count, 0),
      details: rows
    };
  }

  // Horse Statistics
  static async getHorseStats() {
    const [rows] = await db.execute(`
      SELECT 
        kf.Lysing as type,
        kf.Flokkur as category,
        COUNT(*) as count,
        SUM(kf.Verd) as total_value
      FROM 1703_manntal m
      JOIN kft_eignir ke ON m.Tilfelli_nr = ke.Faersla_nr
      JOIN kft_kvikfjar_flokkar kf ON ke.Kvikfe_nr = kf.Kvikfe_nr
      WHERE kf.Kvikfe_nr BETWEEN 13 AND 15
      GROUP BY kf.Lysing, kf.Flokkur
      ORDER BY kf.Kvikfe_nr
    `);
    return {
      total: rows.reduce((acc, curr) => acc + curr.count, 0),
      details: rows
    };
  }

  // Livestock Owners
  static async getLivestockOwners() {
    const [rows] = await db.execute(`
      SELECT 
        e.Einst_nr,
        e.Fullt_nafn,
        COUNT(DISTINCT k.Kvikfe_nr) as livestock_types,
        SUM(ke.Fjoldi) as total_animals
      FROM 1703_einstaklingar e
      JOIN 1703_manntal m ON e.Einst_nr = m.Einst_nr
      JOIN kft_eignir ke ON m.Tilfelli_nr = ke.Faersla_nr
      JOIN kft_kvikfjar_flokkar k ON ke.Kvikfe_nr = k.Kvikfe_nr
      GROUP BY e.Einst_nr, e.Fullt_nafn
      HAVING total_animals > 0
      ORDER BY total_animals DESC
    `);
    return rows;
  }

  // Livestock Value Summary
  static async getLivestockValue() {
    const [rows] = await db.execute(`
      SELECT 
        kf.Kvikfe_nr,
        kf.Lysing as livestock_type,
        kf.Verd as unit_value,
        COUNT(*) as count,
        SUM(kf.Verd) as total_value
      FROM 1703_manntal m
      JOIN kft_eignir ke ON m.Tilfelli_nr = ke.Faersla_nr
      JOIN kft_kvikfjar_flokkar kf ON ke.Kvikfe_nr = kf.Kvikfe_nr
      GROUP BY kf.Kvikfe_nr, kf.Lysing, kf.Verd
      ORDER BY kf.Kvikfe_nr
    `);
    return {
      total_value: rows.reduce((acc, curr) => acc + curr.total_value, 0),
      details: rows
    };
  }

  // Summary Statistics
  static async getLivestockSummary() {
    const [rows] = await db.execute(`
      SELECT 
        SUM(CASE WHEN kf.Kvikfe_nr BETWEEN 1 AND 4 THEN 1 ELSE 0 END) as total_cattle,
        SUM(CASE WHEN kf.Kvikfe_nr BETWEEN 5 AND 8 THEN 1 ELSE 0 END) as total_sheep,
        SUM(CASE WHEN kf.Kvikfe_nr BETWEEN 9 AND 12 THEN 1 ELSE 0 END) as total_goats,
        SUM(CASE WHEN kf.Kvikfe_nr BETWEEN 13 AND 15 THEN 1 ELSE 0 END) as total_horses,
        COUNT(DISTINCT m.Einst_nr) as total_owners
      FROM 1703_manntal m
      JOIN kft_eignir ke ON m.Tilfelli_nr = ke.Faersla_nr
      JOIN kft_kvikfjar_flokkar kf ON ke.Kvikfe_nr = kf.Kvikfe_nr
    `);
    return rows[0];
  }
}

module.exports = Livestock; 