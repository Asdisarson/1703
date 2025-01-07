const Household = require('../models/householdModel');
const asyncHandler = require('../utils/asyncHandler');
const { AppError } = require('../middleware/errorHandler');

exports.getAllHouseholds = asyncHandler(async (req, res) => {
  const households = await Household.getAll();
  res.status(200).json({
    status: 'success',
    data: households
  });
});

exports.getHousehold = asyncHandler(async (req, res) => {
  const household = await Household.getById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: household
  });
});

exports.getHouseholdsByDistrict = asyncHandler(async (req, res) => {
  if (!req.params.districtId) {
    throw new AppError(400, 'District ID is required');
  }
  const households = await Household.getByDistrict(req.params.districtId);
  res.status(200).json({
    status: 'success',
    data: households
  });
});

exports.getHouseholdsWithResidents = asyncHandler(async (req, res) => {
  const households = await Household.getWithResidents();
  res.status(200).json({
    status: 'success',
    data: households
  });
}); 