const db = require('../config/database');
const { AppError } = require('../middleware/errorHandler');

class Household {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM 1703_heimili');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute(
      'SELECT * FROM 1703_heimili WHERE Heimili_nr = ?',
      [id]
    );
    if (!rows.length) {
      throw new AppError(404, 'Household not found');
    }
    return rows[0];
  }

  static async getByDistrict(hreppurNr) {
    const [rows] = await db.execute(
      'SELECT * FROM 1703_heimili WHERE Hreppur_nr = ?',
      [hreppurNr]
    );
    return rows;
  }

  static async getWithResidents() {
    const [rows] = await db.execute(`
      SELECT h.*, e.Fullt_nafn as Husradandi_nafn
      FROM 1703_heimili h
      LEFT JOIN 1703_einstaklingar e ON h.Husradandi_einst_nr = e.Einst_nr
    `);
    return rows;
  }
}

module.exports = Household; 