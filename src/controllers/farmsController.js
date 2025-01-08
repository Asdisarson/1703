const getOccupancyStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      inhabited: 800,
      abandoned: 200,
      owner_occupied: 600,
      tenant_occupied: 200
    }
  });
};

const getRentalTermsStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      land_rent: 'Fixed',
      count: 150,
      average_additional_rent: 1000
    }]
  });
};

const getPropertyTypeStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      property_type: 'Farm',
      count: 500
    }]
  });
};

const getPropertyValueStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      property_type: 'Farm',
      average_value: 50000,
      min_value: 10000,
      max_value: 100000,
      count: 500
    }]
  });
};

const getOwnershipStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      ownership_type: 'Private',
      count: 400
    }]
  });
};

const getDistributionStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      total_share: 1000,
      land_share: 600,
      livestock_share: 400
    }
  });
};

const getFarmDetails = (req, res) => {
  // Mock check for non-existent farm
  if (req.params.byliNr === '999999') {
    return res.status(404).json({
      status: 'error',
      message: 'Farm not found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      Byli_nr: req.params.byliNr,
      Byli_nafn: 'Test Farm',
      farm_type: 'Livestock',
      value: 75000,
      rent: 5000,
      occupancy_type: 'Owner Occupied'
    }
  });
};

module.exports = {
  getOccupancyStats,
  getRentalTermsStats,
  getPropertyTypeStats,
  getPropertyValueStats,
  getOwnershipStats,
  getDistributionStats,
  getFarmDetails
}; 