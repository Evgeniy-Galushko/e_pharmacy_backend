import { ReviewsCollection } from '../db/models/reviews.js';

export const reviewsData = async () => {
  const data = await ReviewsCollection.find().lean();
  return data;
};
