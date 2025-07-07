import { reviewsData } from '../services/reviews.js';

export const reviewsController = async (req, res) => {
  const data = await reviewsData();
  if (!data) return;

  res.status(200).json({
    status: 200,
    message: 'List of reviews',
    data: data,
  });
};
