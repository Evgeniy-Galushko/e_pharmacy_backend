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

export const updateBasket = async (token, idProduct, quantity, options) => {
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
    if (
      availabilityInCart.quantity + parseInt(quantity) >
      parseInt(availabilityInCart.stock)
    ) {
      throw createHttpError(
        404,
        'The quantity of ordered goods exceeds the quantity in stock!',
      );
    }

    const basket = await BasketCollection.findOneAndUpdate(
      {
        _id: idProduct,
        userId: userId,
      },
      { $set: { quantity: availabilityInCart.quantity + parseInt(quantity) } },
      { new: true },
    );
    console.log(basket);
    return basket;
  }

  if (!availabilityInCart) {
    const basket = await BasketCollection.create({
      ...product.toObject(),
      userId: userId,
      quantity: quantity,
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

export const deleteProduct = async (token, productId) => {
  const session = await SessionsCollection.findOne({ accessToken: token });
  const userId = session.userId;

  const product = await BasketCollection.findOneAndDelete({
    userId: userId,
    _id: productId,
  });
  // console.log(product);
  return product;
};
