import {
  NearestCollection,
  PharmaciesCollection,
} from '../db/models/pharmacies.js';

export const pharmaciesData = async () => {
  const data = await PharmaciesCollection.find().lean();
  return data;
};

export const nearestData = async () => {
  const data = await NearestCollection.find().lean();
  return data;
};
