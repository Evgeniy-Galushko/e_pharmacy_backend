import { model, Schema } from 'mongoose';

const reviewsSchema = new Schema(
  {
    img: { type: String, required: true },
    name: { type: String, required: true },
    testimonial: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ReviewsCollection = model('customer-reviews', reviewsSchema);
