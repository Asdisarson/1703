const db = require('../config/database');
const { AppError } = require('../middleware/errorHandler');

class Region {
  static async getAllCounties() {
    const [rows] = await db.execute('SELECT * FROM 1703_syslur');
    return rows;
  }

  static async getCountyById(id) {
    const [rows] = await db.execute(
      'SELECT * FROM 1703_syslur WHERE Sysla_nr = ?',
      [id]
    );
    if (!rows.length) {
      throw new AppError(404, 'County not found');
    }
    return rows[0];
  }

  static async getDistrictsByCounty(syslaId) {
    const [rows] = await db.execute(`
      SELECT h.*, hn.Hreppur_nafn
      FROM 1703_hreppar h
      JOIN 1703_hreppar_nofn hn ON h.Hreppur_nr = hn.Hreppur_nr
      WHERE h.Sysla_nr = ?
    `, [syslaId]);
    return rows;
  }

  static async getDistrictDetails(hreppurId) {
    const [rows] = await db.execute(`
      SELECT h.*, hn.Hreppur_nafn, s.Sysla_nafn_langt
      FROM 1703_hreppar h
      JOIN 1703_hreppar_nofn hn ON h.Hreppur_nr = hn.Hreppur_nr
      JOIN 1703_syslur s ON h.Sysla_nr = s.Sysla_nr
      WHERE h.Hreppur_nr = ?
    `, [hreppurId]);
    if (!rows.length) {
      throw new AppError(404, 'District not found');
    }
    return rows[0];
  }
}

module.exports = Region; 