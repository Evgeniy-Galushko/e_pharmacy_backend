import createHttpError from 'http-errors';
import { BasketCollection } from '../db/models/basket.js';
import { OrderCollection } from '../db/models/order.js';
import { ProductsCollection } from '../db/models/product.js';
import { SessionsCollection } from '../db/models/session.js';

export const listOfBasket = async (token) => {
  const session = await SessionsCollection.findOne({ accessToken: token });
  const userId = session.userId;
  const basket = await BasketCollection.find({ userId: userId });

  return basket;
};

export const updateBasket = async (token, idProduct, options) => {
  const session = await SessionsCollection.findOne({ accessToken: token });

  const product = await ProductsCollection.findOne({ _id: idProduct });

  if (!product) {
    throw createHttpError(404, 'There is no such product');
  }

  const userId = session.userId;
  const availabilityInCart = await BasketCollection.findOne({
    userId,
    _id: idProduct,
  });

  if (availabilityInCart) {
    throw createHttpError(404, 'Product added to cart');
  }
  if (!availabilityInCart) {
    const basket = await BasketCollection.create({
      ...product.toObject(),
      userId: userId,
    });
    return basket;
  }
};

export const orderProcessing = async (payload, token) => {
  const session = await SessionsCollection.findOne({ accessToken: token });
  const userId = session.userId;

  const order = await OrderCollection.create({
    ...payload.body,
    userId: userId,
    status: 'pending',
  });

  return order;
};
