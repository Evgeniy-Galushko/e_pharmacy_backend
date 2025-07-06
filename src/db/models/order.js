import { model, Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    photo: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    products: { type: String, required: true },
    price: { type: String, required: true },
    status: { type: String, required: true },
    order_date: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const OrderCollection = model('orders', orderSchema);
