import { model, Schema } from 'mongoose';

const basketSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    id: { type: String, required: true },
    photo: { type: String, required: true },
    name: { type: String, required: true },
    suppliers: { type: String, required: true },
    stock: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const BasketCollection = model('baskets', basketSchema);
