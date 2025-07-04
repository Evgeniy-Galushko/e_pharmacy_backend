import { OrderCollection } from '../db/models/order.js';
import { ProductsCollection } from '../db/models/product.js';
import { SessionsCollection } from '../db/models/session.js';
import { UsersCollection } from '../db/models/user.js';

export const listOfOrders = async (token) => {
  const session = await SessionsCollection.findOne({ accessToken: token });
  const user = await UsersCollection.findById(session.userId);
  const order = user.order;

  return order;
};

export const updaateOrder = async (token, idProduct, options) => {
  const session = await SessionsCollection.findOne({ accessToken: token });

  const product = await ProductsCollection.findOne({ _id: idProduct });

  const user = await UsersCollection.findById(session.userId);
  user.order.push(product);
  await user.save();

  const newOrder = await UsersCollection.findById(session.userId);

  return newOrder;
};
