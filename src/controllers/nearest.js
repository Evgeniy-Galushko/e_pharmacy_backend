import { nearestData, pharmaciesData } from '../services/nearest.js';

export const pharmaciesController = async (req, res) => {
  const data = await pharmaciesData();
  if (!data) return;

  res.status(200).json({
    status: 200,
    message: 'List of pharmacies with details',
    data: data,
  });
};

export const nearestController = async (req, res) => {
  const data = await nearestData();
  if (!data) return;

  res.status(200).json({
    status: 200,
    message: 'List of nearest pharmacies',
    data: data,
  });
};
