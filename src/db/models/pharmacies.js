import { model, Schema } from 'mongoose';

const pharmacieSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const NearestCollection = model('nearests', pharmacieSchema);

export const PharmaciesCollection = model('pharmacies', pharmacieSchema);
