const db = require('../config/database');
const { AppError } = require('../middleware/errorHandler');

class FarmStatistics {
  // Farm Occupancy
  static async getFarmOccupancy() {
    const [rows] = await db.execute(`
      SELECT 
        SUM(CASE WHEN a.Abud_nr IS NOT NULL THEN 1 ELSE 0 END) as inhabited,
        SUM(CASE WHEN a.Abud_nr IS NULL THEN 1 ELSE 0 END) as abandoned,
        SUM(CASE WHEN af.Abudarflokkur_nr = 1 THEN 1 ELSE 0 END) as owner_occupied,
        SUM(CASE WHEN af.Abudarflokkur_nr = 2 THEN 1 ELSE 0 END) as tenant_occupied
      FROM 1703_byli b
      LEFT JOIN 1703_abud a ON b.Byli_nr = a.Byli_nr
      LEFT JOIN abudarflokkur af ON a.Abudarflokkur_nr = af.Abudarflokkur_nr
    `);
    return rows[0];
  }

  // Rental Terms
  static async getRentalTerms() {
    const [rows] = await db.execute(`
      SELECT 
        a.Abud_hndr as land_rent,
        COUNT(*) as count,
        AVG(a.Abud_plus_alnir) as average_additional_rent
      FROM 1703_abud a
      WHERE a.Abud_hndr IS NOT NULL
      GROUP BY a.Abud_hndr
      ORDER BY a.Abud_hndr
    `);
    return rows;
  }

  // Property Types
  static async getPropertyTypes() {
    const [rows] = await db.execute(`
      SELECT 
        bf.Bylisflokkur as property_type,
        COUNT(*) as count
      FROM 1703_byli b
      JOIN 1703_bylisflokkur bf ON b.Bylisflokkur_nr = bf.Bylisflokkur_nr
      GROUP BY bf.Bylisflokkur
    `);
    return rows;
  }

  // Property Value (Dýrleiki)
  static async getPropertyValues() {
    const [rows] = await db.execute(`
      SELECT 
        CASE 
          WHEN b.Bylisflokkur_nr = 1 THEN 'Lögbýli'
          WHEN b.Bylisflokkur_nr = 2 THEN 'Hjáleiga'
          ELSE 'Annað'
        END as property_type,
        AVG(d.Dyrl_heil_hndr) as average_value,
        MIN(d.Dyrl_heil_hndr) as min_value,
        MAX(d.Dyrl_heil_hndr) as max_value,
        COUNT(*) as count
      FROM 1703_byli b
      JOIN 1703_dyrleiki d ON b.Byli_nr = d.Byli_nr
      WHERE b.Bylisflokkur_nr IN (1, 2)
      GROUP BY property_type
    `);
    return rows;
  }

  // Ownership
  static async getOwnership() {
    const [rows] = await db.execute(`
      SELECT 
        af.Ad_flokkur as ownership_type,
        COUNT(*) as count
      FROM 1703_byli_eigandi be
      JOIN 1703_adilar a ON be.Adili_nr = a.Adili_nr
      JOIN adili_flokkur af ON a.Ad_flokkur_nr = af.Ad_flokkur_nr
      GROUP BY af.Ad_flokkur
      ORDER BY count DESC
    `);
    return rows;
  }

  // Property Distribution
  static async getPropertyDistribution() {
    const [rows] = await db.execute(`
      SELECT 
        SUM(e.Eign_hlutfall) as total_share,
        SUM(CASE 
          WHEN e.Eign_heil_hndr IS NOT NULL THEN e.Eign_hlutfall
          ELSE 0
        END) as land_share,
        SUM(CASE 
          WHEN e.Eign_plus_alnir IS NOT NULL THEN e.Eign_hlutfall
          ELSE 0
        END) as livestock_share
      FROM 1703_eignir e
    `);
    return rows[0];
  }

  // Detailed Farm Information
  static async getDetailedFarmInfo(byliNr) {
    const [rows] = await db.execute(`
      SELECT 
        b.Byli_nr,
        bn.Byli_nafn,
        bf.Bylisflokkur as farm_type,
        d.Dyrl_heil_hndr as value,
        a.Abud_hndr as rent,
        af.Abudarflokkur as occupancy_type,
        e.Eign_hlutfall as ownership_share,
        adf.Ad_flokkur as owner_type
      FROM 1703_byli b
      LEFT JOIN 1703_byli_nofn bn ON b.Byli_nr = bn.Byli_nr
      LEFT JOIN 1703_bylisflokkur bf ON b.Bylisflokkur_nr = bf.Bylisflokkur_nr
      LEFT JOIN 1703_dyrleiki d ON b.Byli_nr = d.Byli_nr
      LEFT JOIN 1703_abud a ON b.Byli_nr = a.Byli_nr
      LEFT JOIN abudarflokkur af ON a.Abudarflokkur_nr = af.Abudarflokkur_nr
      LEFT JOIN 1703_eignir e ON b.Byli_nr = e.Byli_nr
      LEFT JOIN 1703_byli_eigandi be ON b.Byli_nr = be.Byli_nr
      LEFT JOIN 1703_adilar ad ON be.Adili_nr = ad.Adili_nr
      LEFT JOIN adili_flokkur adf ON ad.Ad_flokkur_nr = adf.Ad_flokkur_nr
      WHERE b.Byli_nr = ?
    `, [byliNr]);

    if (!rows.length) {
      throw new AppError(404, 'Farm not found');
    }
    return rows[0];
  }
}

module.exports = FarmStatistics; 