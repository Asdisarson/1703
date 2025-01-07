const db = require('../config/database');
const { AppError } = require('../middleware/errorHandler');

class Individual {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM 1703_einstaklingar');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute(
      'SELECT * FROM 1703_einstaklingar WHERE Einst_nr = ?',
      [id]
    );
    if (!rows.length) {
      throw new AppError(404, 'Individual not found');
    }
    return rows[0];
  }

  static async getByAge(age) {
    const [rows] = await db.execute(
      'SELECT * FROM 1703_einstaklingar WHERE Aldur = ?',
      [age]
    );
    return rows;
  }

  static async getByGender(gender) {
    const [rows] = await db.execute(
      'SELECT * FROM 1703_einstaklingar WHERE Kyn = ?',
      [gender]
    );
    return rows;
  }
}

module.exports = Individual; 