const FarmStatistics = require('../models/farmStatisticsModel');
const asyncHandler = require('../utils/asyncHandler');
const { AppError } = require('../middleware/errorHandler');

// Farm Occupancy
exports.getFarmOccupancy = asyncHandler(async (req, res) => {
  const stats = await FarmStatistics.getFarmOccupancy();
  res.status(200).json({
    status: 'success',
    data: stats
  });
});

// Rental Terms
exports.getRentalTerms = asyncHandler(async (req, res) => {
  const stats = await FarmStatistics.getRentalTerms();
  res.status(200).json({
    status: 'success',
    data: stats
  });
});

// Property Types
exports.getPropertyTypes = asyncHandler(async (req, res) => {
  const stats = await FarmStatistics.getPropertyTypes();
  res.status(200).json({
    status: 'success',
    data: stats
  });
});

// Property Values
exports.getPropertyValues = asyncHandler(async (req, res) => {
  const stats = await FarmStatistics.getPropertyValues();
  res.status(200).json({
    status: 'success',
    data: stats
  });
});

// Ownership
exports.getOwnership = asyncHandler(async (req, res) => {
  const stats = await FarmStatistics.getOwnership();
  res.status(200).json({
    status: 'success',
    data: stats
  });
});

// Property Distribution
exports.getPropertyDistribution = asyncHandler(async (req, res) => {
  const stats = await FarmStatistics.getPropertyDistribution();
  res.status(200).json({
    status: 'success',
    data: stats
  });
});

// Detailed Farm Information
exports.getDetailedFarmInfo = asyncHandler(async (req, res) => {
  if (!req.params.byliNr) {
    throw new AppError(400, 'Farm ID (byli_nr) is required');
  }
  const info = await FarmStatistics.getDetailedFarmInfo(req.params.byliNr);
  res.status(200).json({
    status: 'success',
    data: info
  });
}); 