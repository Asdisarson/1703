const getCattleStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      total: 1000,
      details: [{
        type: 'Cattle',
        category: 'Dairy',
        count: 500,
        total_value: 250000
      }]
    }
  });
};

const getSheepStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      total: 5000,
      details: [{
        type: 'Sheep',
        category: 'Ewes',
        count: 3000,
        total_value: 300000
      }]
    }
  });
};

const getGoatStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      total: 200,
      details: [{
        type: 'Goat',
        category: 'Dairy',
        count: 150,
        total_value: 30000
      }]
    }
  });
};

const getHorseStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      total: 800,
      details: [{
        type: 'Horse',
        category: 'Working',
        count: 600,
        total_value: 480000
      }]
    }
  });
};

const getLivestockOwners = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      Einst_nr: 1,
      Fullt_nafn: 'Test Owner',
      livestock_types: ['Cattle', 'Sheep'],
      total_animals: 1500
    }]
  });
};

const getLivestockValue = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      total_value: 1060000,
      details: [{
        livestock_type: 'Cattle',
        unit_value: 500,
        count: 1000,
        total_value: 500000
      }]
    }
  });
};

const getLivestockSummary = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      total_cattle: 1000,
      total_sheep: 5000,
      total_goats: 200,
      total_horses: 800,
      total_owners: 500
    }
  });
};

module.exports = {
  getCattleStats,
  getSheepStats,
  getGoatStats,
  getHorseStats,
  getLivestockOwners,
  getLivestockValue,
  getLivestockSummary
}; 