const mockData = {
  districts: [
    { Hreppur_nr: 1, Hreppur_nafn: 'Test District 1', population: 150 },
    { Hreppur_nr: 2, Hreppur_nafn: 'Test District 2', population: 200 }
  ],
  counties: [
    { Sysla_nr: 1, county_name: 'Test County 1', population: 350 },
    { Sysla_nr: 2, county_name: 'Test County 2', population: 450 }
  ],
  ageGender: [
    { gender: 'Karl', age_group: '0-15', count: 50 },
    { gender: 'Kona', age_group: '16-25', count: 75 }
  ],
  maritalStatus: [
    { marital_status: 'Gift(ur)', count: 200 },
    { marital_status: 'Ógift(ur)', count: 150 }
  ],
  householdSizes: [
    { household_size: 1, count: 20 },
    { household_size: 2, count: 35 }
  ],
  householdTypes: [
    { household_type: 'Heimili á lögbýlum', count: 100 },
    { household_type: 'Heimili í hjáleigum', count: 50 }
  ],
  householdHeads: [
    { gender: 'Karl', count: 150, average_age: 45.5 },
    { gender: 'Kona', count: 50, average_age: 52.3 }
  ],
  householdStatus: [
    { household_status: 'Húsbóndi', count: 200 },
    { household_status: 'Vinnumaður', count: 100 }
  ],
  occupationalStatus: [
    { occupation: 'Bóndi', count: 150 },
    { occupation: 'Vinnumaður', count: 100 }
  ]
};

// Mock database queries
const mockDb = {
  execute: jest.fn((query) => {
    if (query.includes('1703_hreppar')) return Promise.resolve([mockData.districts]);
    if (query.includes('1703_syslur')) return Promise.resolve([mockData.counties]);
    if (query.includes('Kyn_txt')) return Promise.resolve([mockData.ageGender]);
    if (query.includes('marital_status')) return Promise.resolve([mockData.maritalStatus]);
    if (query.includes('household_size')) return Promise.resolve([mockData.householdSizes]);
    if (query.includes('household_type')) return Promise.resolve([mockData.householdTypes]);
    if (query.includes('Husradandi')) return Promise.resolve([mockData.householdHeads]);
    if (query.includes('household_status')) return Promise.resolve([mockData.householdStatus]);
    if (query.includes('occupation')) return Promise.resolve([mockData.occupationalStatus]);
    return Promise.resolve([[]]);
  })
};

module.exports = {
  mockData,
  mockDb
}; 