const db = require('../config/database');
const { AppError } = require('../middleware/errorHandler');

class Statistics {
  // Population by Age and Gender
  static async getPopulationByAgeAndGender() {
    const [rows] = await db.execute(`
      SELECT 
        e.Kyn,
        e.Kyn_txt,
        e.Aldur,
        COUNT(*) as count
      FROM 1703_einstaklingar e
      GROUP BY e.Kyn, e.Kyn_txt, e.Aldur
      ORDER BY e.Kyn, e.Aldur
    `);
    return rows;
  }

  // Marital Status
  static async getMaritalStatus() {
    const [rows] = await db.execute(`
      SELECT 
        CASE
          WHEN m.Lysing LIKE '%gift%' THEN 'Gift(ur)'
          WHEN m.Lysing LIKE '%ekkja%' OR m.Lysing LIKE '%ekkill%' THEN 'Ekkja / ekkill'
          WHEN m.Lysing LIKE '%ógift%' THEN 'Ógift(ur)'
          WHEN m.Lysing LIKE '%sambúð%' THEN 'Í sambúð'
          ELSE 'Óviss'
        END as hjuskaparstada,
        COUNT(*) as count
      FROM 1703_manntal m
      GROUP BY hjuskaparstada
    `);
    return rows;
  }

  // Household Statistics
  static async getHouseholdSizes() {
    const [rows] = await db.execute(`
      SELECT 
        COUNT(m.Einst_nr) as household_size,
        COUNT(*) as count
      FROM 1703_heimili h
      LEFT JOIN 1703_manntal m ON h.Heimili_nr = m.Heimili_nr
      GROUP BY h.Heimili_nr
      ORDER BY household_size
    `);
    return rows;
  }

  static async getHouseholdTypes() {
    const [rows] = await db.execute(`
      SELECT 
        CASE
          WHEN h.Er_heimili = 'Já' AND b.Bylisflokkur_nr = 1 THEN 'Heimili á lögbýlum'
          WHEN h.Er_heimili = 'Já' AND b.Bylisflokkur_nr = 2 THEN 'Heimili í hjáleigum'
          WHEN h.Er_heimili = 'Já' AND b.Bylisflokkur_nr = 3 THEN 'Heimili þurrabúðarmanna'
          WHEN h.Er_heimili = 'Já' AND b.Bylisflokkur_nr = 4 THEN 'Heimili húsfólks'
          WHEN h.Er_heimili = 'Já' AND b.Bylisflokkur_nr = 5 THEN 'Fátækrahús'
          WHEN h.Er_heimili = 'Já' AND b.Bylisflokkur_nr = 6 THEN 'Stofnanaheimili'
          ELSE 'Annað'
        END as household_type,
        COUNT(*) as count
      FROM 1703_heimili h
      LEFT JOIN 1703_byli b ON h.Byli_nr = b.Byli_nr
      LEFT JOIN 1703_bylisflokkur bf ON b.Bylisflokkur_nr = bf.Bylisflokkur_nr
      GROUP BY household_type
    `);
    return rows;
  }

  // Household Heads (Húsráðendur)
  static async getHouseholdHeads() {
    const [rows] = await db.execute(`
      SELECT 
        e.Kyn_txt as gender,
        COUNT(*) as count,
        AVG(e.Aldur) as average_age
      FROM 1703_heimili h
      JOIN 1703_einstaklingar e ON h.Husradandi_einst_nr = e.Einst_nr
      WHERE h.Husmadur = 'Já'
      GROUP BY e.Kyn_txt
    `);
    return rows;
  }

  // Household Status
  static async getHouseholdStatus() {
    const [rows] = await db.execute(`
      SELECT 
        m.Lysing as household_status,
        COUNT(*) as count
      FROM 1703_manntal m
      WHERE m.Lysing IN ('Húsbóndi', 'Húsfreyja', 'Vinnumaður', 'Vinnukona')
      GROUP BY m.Lysing
    `);
    return rows;
  }

  // Occupational Status
  static async getOccupationalStatus() {
    const [rows] = await db.execute(`
      SELECT 
        m.Lysing as occupation,
        COUNT(*) as count
      FROM 1703_manntal m
      WHERE m.Lysing NOT IN ('Húsbóndi', 'Húsfreyja', 'Vinnumaður', 'Vinnukona')
      GROUP BY m.Lysing
      HAVING COUNT(*) > 5
      ORDER BY count DESC
    `);
    return rows;
  }

  // Farm Information
  static async getFarmInfo(byliNr) {
    const [rows] = await db.execute(`
      SELECT 
        b.Byli_nr,
        bn.Byli_nafn,
        h.Heimili_nr,
        COUNT(DISTINCT m.Einst_nr) as population,
        e.Fullt_nafn as husradandi_name,
        bf.Bylisflokkur as farm_type
      FROM 1703_byli b
      JOIN 1703_byli_nofn bn ON b.Byli_nr = bn.Byli_nr
      LEFT JOIN 1703_heimili h ON b.Byli_nr = h.Byli_nr
      LEFT JOIN 1703_manntal m ON h.Heimili_nr = m.Heimili_nr
      LEFT JOIN 1703_einstaklingar e ON h.Husradandi_einst_nr = e.Einst_nr
      LEFT JOIN 1703_bylisflokkur bf ON b.Bylisflokkur_nr = bf.Bylisflokkur_nr
      WHERE b.Byli_nr = ?
      GROUP BY b.Byli_nr, bn.Byli_nafn, h.Heimili_nr, e.Fullt_nafn, bf.Bylisflokkur
    `, [byliNr]);
    
    if (!rows.length) {
      throw new AppError(404, 'Farm not found');
    }
    return rows[0];
  }
}

module.exports = Statistics; 