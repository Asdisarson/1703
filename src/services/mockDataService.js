const mockData = {
  individuals: [
    { Einst_nr: 1, Fullt_nafn: 'Jón Jónsson', Fornafn: 'Jón', Eftirnafn: 'Jónsson', Kyn: 1, Aldur: 45, Kyn_txt: 'Karl' },
    { Einst_nr: 2, Fullt_nafn: 'Anna Jónsdóttir', Fornafn: 'Anna', Eftirnafn: 'Jónsdóttir', Kyn: 2, Aldur: 40, Kyn_txt: 'Kona' }
  ],
  households: [
    { Heimili_nr: 1, Byli_nr: 1, Hreppur_nr: 1, Er_heimili: 'Já', Husradandi_einst_nr: 1 },
    { Heimili_nr: 2, Byli_nr: 2, Hreppur_nr: 1, Er_heimili: 'Já', Husradandi_einst_nr: 2 }
  ],
  districts: [
    { Hreppur_nr: 1, Hreppur_nafn: 'Reykjavíkurhreppur', population: 150 },
    { Hreppur_nr: 2, Hreppur_nafn: 'Mosfellshreppur', population: 200 }
  ],
  counties: [
    { Sysla_nr: 1, county_name: 'Gullbringusýsla', population: 350 },
    { Sysla_nr: 2, county_name: 'Kjósarsýsla', population: 450 }
  ],
  ageGender: [
    { gender: 'Karl', age_group: '0-15', count: 50 },
    { gender: 'Karl', age_group: '16-25', count: 75 },
    { gender: 'Kona', age_group: '0-15', count: 45 },
    { gender: 'Kona', age_group: '16-25', count: 80 }
  ],
  maritalStatus: [
    { marital_status: 'Gift(ur)', count: 200 },
    { marital_status: 'Ógift(ur)', count: 150 },
    { marital_status: 'Ekkja / ekkill', count: 50 },
    { marital_status: 'Í sambúð', count: 25 }
  ],
  householdSizes: [
    { household_size: 1, count: 20 },
    { household_size: 2, count: 35 },
    { household_size: 3, count: 45 },
    { household_size: 4, count: 30 }
  ],
  householdTypes: [
    { household_type: 'Heimili á lögbýlum', count: 100 },
    { household_type: 'Heimili í hjáleigum', count: 50 },
    { household_type: 'Heimili þurrabúðarmanna', count: 30 },
    { household_type: 'Heimili húsfólks', count: 20 },
    { household_type: 'Fátækrahús', count: 10 },
    { household_type: 'Stofnanaheimili', count: 5 }
  ],
  householdHeads: [
    { gender: 'Karl', count: 150, average_age: 45.5 },
    { gender: 'Kona', count: 50, average_age: 52.3 }
  ],
  householdStatus: [
    { household_status: 'Húsbóndi', count: 200 },
    { household_status: 'Húsfreyja', count: 180 },
    { household_status: 'Vinnumaður', count: 100 },
    { household_status: 'Vinnukona', count: 90 }
  ],
  occupationalStatus: [
    { occupation: 'Bóndi', count: 150 },
    { occupation: 'Vinnumaður', count: 100 },
    { occupation: 'Vinnukona', count: 90 },
    { occupation: 'Húsfreyja', count: 80 }
  ],
  occupancy: {
    inhabited: 450,
    abandoned: 50,
    owner_occupied: 200,
    tenant_occupied: 250
  },
  rentalTerms: [
    { land_rent: 120, livestock_units: 6, obligations: 'Dagsláttur og mannslán' },
    { land_rent: 180, livestock_units: 8, obligations: 'Heytollur og lambsfóður' },
    { land_rent: 90, livestock_units: 4, obligations: 'Dagsláttur' }
  ],
  propertyTypes: {
    logbyli_count: 300,
    hjaleigur_count: 150,
    thurrabud_count: 50,
    husmenn_count: 75
  },
  propertyValue: [
    { 
      property_type: 'Lögbýli',
      average_value: 24.5,
      min_value: 12,
      max_value: 60,
      count: 300
    },
    {
      property_type: 'Hjáleiga',
      average_value: 12.3,
      min_value: 6,
      max_value: 24,
      count: 150
    }
  ],
  ownership: [
    { ownership_type: 'Konungseign', count: 100 },
    { ownership_type: 'Eign Hólastóls', count: 80 },
    { ownership_type: 'Eign Skálholtsstóls', count: 90 },
    { ownership_type: 'Beneficium', count: 60 },
    { ownership_type: 'Bændakirkja', count: 70 },
    { ownership_type: 'Einkaeign', count: 200 }
  ],
  distribution: {
    total_share: 10.0,
    land_share: 6.5,
    livestock_share: 3.5
  },
  cattle: {
    cows: 1200,
    heifers: 450,
    dry_cattle: 300,
    calves: 600
  },
  sheep: {
    ewes: 5000,
    rams: 800,
    yearling_sheep: 1200,
    lambs: 4500
  },
  goats: {
    goats: 300,
    bucks: 50,
    yearling_goats: 80,
    kids: 120
  },
  horses: {
    stallions_geldings: 400,
    mares: 600,
    young_horses: 250
  },
  livestockOwners: [
    { Einst_nr: 1, Fullt_nafn: 'Jón Jónsson', livestock_types: 4, total_animals: 85 },
    { Einst_nr: 2, Fullt_nafn: 'Guðrún Guðmundsdóttir', livestock_types: 3, total_animals: 65 },
    { Einst_nr: 3, Fullt_nafn: 'Sigurður Sigurðsson', livestock_types: 4, total_animals: 95 }
  ],
  livestockValue: {
    total_value: 25000,
    breakdown: [
      { Kvikfe_nr: 1, livestock_type: 'Kýr', unit_value: 120, count: 1200, total_value: 144000 },
      { Kvikfe_nr: 5, livestock_type: 'Ær', unit_value: 20, count: 5000, total_value: 100000 },
      { Kvikfe_nr: 13, livestock_type: 'Hestar', unit_value: 150, count: 400, total_value: 60000 }
    ]
  },
  livestockSummary: {
    total_cattle: 2550,
    total_sheep: 11500,
    total_goats: 550,
    total_horses: 1250,
    total_owners: 450
  }
};

class MockDataService {
  async query(type, params = {}) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));

    switch (type) {
      case 'individuals':
        return [mockData.individuals];
      case 'households':
        return [mockData.households];
      case 'districts':
        return [mockData.districts];
      case 'counties':
        return [mockData.counties];
      case 'ageGender':
        return [mockData.ageGender];
      case 'maritalStatus':
        return [mockData.maritalStatus];
      case 'householdSizes':
        return [mockData.householdSizes];
      case 'householdTypes':
        return [mockData.householdTypes];
      case 'householdHeads':
        return [mockData.householdHeads];
      case 'householdStatus':
        return [mockData.householdStatus];
      case 'occupationalStatus':
        return [mockData.occupationalStatus];
      case 'occupancy':
        return [mockData.occupancy];
      case 'rentalTerms':
        return [mockData.rentalTerms];
      case 'propertyTypes':
        return [mockData.propertyTypes];
      case 'propertyValue':
        return [mockData.propertyValue];
      case 'ownership':
        return [mockData.ownership];
      case 'distribution':
        return [mockData.distribution];
      case 'cattle':
        return [mockData.cattle];
      case 'sheep':
        return [mockData.sheep];
      case 'goats':
        return [mockData.goats];
      case 'horses':
        return [mockData.horses];
      case 'livestockOwners':
        return [mockData.livestockOwners];
      case 'livestockValue':
        return [mockData.livestockValue];
      case 'livestockSummary':
        return [mockData.livestockSummary];
      default:
        return [[]];
    }
  }

  async execute(query, params = []) {
    // Simple query parser to determine what data to return
    if (query.includes('1703_einstaklingar')) return this.query('individuals');
    if (query.includes('1703_heimili')) return this.query('households');
    if (query.includes('1703_hreppar')) return this.query('districts');
    if (query.includes('1703_syslur')) return this.query('counties');
    if (query.includes('age_group')) return this.query('ageGender');
    if (query.includes('marital_status')) return this.query('maritalStatus');
    if (query.includes('household_size')) return this.query('householdSizes');
    if (query.includes('household_type')) return this.query('householdTypes');
    if (query.includes('Husradandi')) return this.query('householdHeads');
    if (query.includes('household_status')) return this.query('householdStatus');
    if (query.includes('occupation')) return this.query('occupationalStatus');
    if (query.includes('1703_abud')) return this.query('occupancy');
    if (query.includes('landskuld')) return this.query('rentalTerms');
    if (query.includes('Er_logbyli')) return this.query('propertyTypes');
    if (query.includes('Dyrl_heil_hndr')) return this.query('propertyValue');
    if (query.includes('Ad_flokkur_nr')) return this.query('ownership');
    if (query.includes('Eign_hlutfall')) return this.query('distribution');
    if (query.includes('Kvikfje_nr BETWEEN 1 AND 4')) return this.query('cattle');
    if (query.includes('Kvikfje_nr BETWEEN 5 AND 8')) return this.query('sheep');
    if (query.includes('Kvikfje_nr BETWEEN 9 AND 12')) return this.query('goats');
    if (query.includes('Kvikfje_nr BETWEEN 13 AND 15')) return this.query('horses');
    if (query.includes('COUNT(DISTINCT k.Kvikfje_nr)')) return this.query('livestockOwners');
    if (query.includes('kft_kvikfjar_flokkar')) return this.query('livestockValue');
    if (query.includes('total_cattle')) return this.query('livestockSummary');
    return [[]];
  }
}

module.exports = new MockDataService(); 