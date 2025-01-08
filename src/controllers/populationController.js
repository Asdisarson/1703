const getTotal = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      total: 50000
    }
  });
};

const getByDistrict = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      Hreppur_nr: 1,
      Hreppur_nafn: 'Test District',
      population: 1000
    }]
  });
};

const getByCounty = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [{
      Sysla_nr: 1,
      Sysla_nafn_langt: 'Test County',
      population: 5000
    }]
  });
};

module.exports = {
  getTotal,
  getByDistrict,
  getByCounty
}; 