const Region = require('../models/regionModel');
const asyncHandler = require('../utils/asyncHandler');

exports.getAllCounties = asyncHandler(async (req, res) => {
  const counties = await Region.getAllCounties();
  res.status(200).json({
    status: 'success',
    data: counties
  });
});

exports.getCounty = asyncHandler(async (req, res) => {
  const county = await Region.getCountyById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: county
  });
});

exports.getDistrictsByCounty = asyncHandler(async (req, res) => {
  const districts = await Region.getDistrictsByCounty(req.params.countyId);
  res.status(200).json({
    status: 'success',
    data: districts
  });
});

exports.getDistrictDetails = asyncHandler(async (req, res) => {
  const district = await Region.getDistrictDetails(req.params.id);
  res.status(200).json({
    status: 'success',
    data: district
  });
}); 