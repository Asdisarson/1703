const getAgeGenderStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      Kyn: 1,
      Kyn_txt: 'Karl',
      Aldur: 25,
      count: 100
    }]
  });
};

const getMaritalStatusStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      hjuskaparstada: 'Giftur',
      count: 200
    }]
  });
};

const getHouseholdSizeStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      household_size: 4,
      count: 150
    }]
  });
};

const getHouseholdTypeStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      household_type: 'Family',
      count: 300
    }]
  });
};

const getHouseholdStatusStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      household_status: 'Owner',
      count: 250
    }]
  });
};

const getOccupationalStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      occupation: 'Farmer',
      count: 400
    }]
  });
};

module.exports = {
  getAgeGenderStats,
  getMaritalStatusStats,
  getHouseholdSizeStats,
  getHouseholdTypeStats,
  getHouseholdStatusStats,
  getOccupationalStats
}; 