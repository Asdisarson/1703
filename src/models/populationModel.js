const db = require('../config/database');
const { AppError } = require('../middleware/errorHandler');

class Population {
  static async getTotal() {
    const [rows] = await db.execute('SELECT COUNT(*) as total FROM 1703_einstaklingar');
    return rows[0];
  }

  static async getByDistrict() {
    const [rows] = await db.execute(`
      SELECT 
        h.Hreppur_nr,
        hn.Hreppur_nafn,
        COUNT(DISTINCT m.Einst_nr) as population
      FROM 1703_hreppar h
      JOIN 1703_hreppar_nofn hn ON h.Hreppur_nr = hn.Hreppur_nr
      JOIN 1703_heimili hm ON h.Hreppur_nr = hm.Hreppur_nr
      JOIN 1703_manntal m ON hm.Heimili_nr = m.Heimili_nr
      GROUP BY h.Hreppur_nr, hn.Hreppur_nafn
      ORDER BY h.Hreppur_nr
    `);
    return rows;
  }

  static async getByCounty() {
    const [rows] = await db.execute(`
      SELECT 
        s.Sysla_nr,
        s.Sysla_nafn_langt,
        COUNT(DISTINCT m.Einst_nr) as population
      FROM 1703_syslur s
      JOIN 1703_hreppar h ON s.Sysla_nr = h.Sysla_nr
      JOIN 1703_heimili hm ON h.Hreppur_nr = hm.Hreppur_nr
      JOIN 1703_manntal m ON hm.Heimili_nr = m.Heimili_nr
      GROUP BY s.Sysla_nr, s.Sysla_nafn_langt
      ORDER BY s.Sysla_nr
    `);
    return rows;
  }
}

module.exports = Population; 