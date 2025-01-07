const Individual = require('../models/individualModel');
const asyncHandler = require('../utils/asyncHandler');
const { AppError } = require('../middleware/errorHandler');

exports.getAllIndividuals = asyncHandler(async (req, res) => {
  const individuals = await Individual.getAll();
  res.status(200).json({
    status: 'success',
    data: individuals
  });
});

exports.getIndividual = asyncHandler(async (req, res) => {
  const individual = await Individual.getById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: individual
  });
});

exports.getIndividualsByAge = asyncHandler(async (req, res) => {
  if (!req.query.age) {
    throw new AppError(400, 'Age parameter is required');
  }
  const individuals = await Individual.getByAge(req.query.age);
  res.status(200).json({
    status: 'success',
    data: individuals
  });
});

exports.getIndividualsByGender = asyncHandler(async (req, res) => {
  if (!req.query.gender) {
    throw new AppError(400, 'Gender parameter is required');
  }
  const individuals = await Individual.getByGender(req.query.gender);
  res.status(200).json({
    status: 'success',
    data: individuals
  });
}); 