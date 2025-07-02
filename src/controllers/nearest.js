import { nearestData, pharmaciesData } from '../services/nearest.js';

export const pharmaciesController = async (req, res) => {
  const data = await pharmaciesData();
  if (!data) return;

  res.status(200).json({
    data: data,
  });
};

export const nearestController = async (req, res) => {
  const data = await nearestData();
  if (!data) return;

  res.status(200).json({
    data: data,
  });
};
