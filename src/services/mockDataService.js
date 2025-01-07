const mockData = {
  '1703_einstaklingar': [
    {
      Einst_nr: 1,
      Fullt_nafn: 'John Doe',
      Fornafn: 'John',
      Eftirnafn: 'Doe',
      Kyn: 1,
      Aldur: 30,
      Kyn_txt: 'Karl'
    },
    {
      Einst_nr: 2,
      Fullt_nafn: 'Jane Smith',
      Fornafn: 'Jane',
      Eftirnafn: 'Smith',
      Kyn: 2,
      Aldur: 25,
      Kyn_txt: 'Kona'
    }
  ],
  '1703_heimili': [
    {
      Heimili_nr: 1,
      Byli_nr: 1,
      Hreppur_nr: 1,
      Rodun: 1,
      Er_heimili: 'Já',
      Husradandi_einst_nr: 1,
      Husmadur: 'Já'
    }
  ],
  '1703_syslur': [
    {
      Sysla_nr: 1,
      Sysla_nafn_langt: 'Gullbringusýsla',
      Sysla_nafn_stutt: 'Gullbr.sýsla',
      Landshluti: 'Suðurland'
    }
  ]
};

const execute = async (query, params = []) => {
  const tableName = query.match(/FROM\s+(\w+)/i)?.[1];
  if (!tableName || !mockData[tableName]) {
    return [[], []];
  }

  // Simple mock implementation - returns all data for the table
  return [mockData[tableName], []];
};

module.exports = {
  execute,
  mockData
};