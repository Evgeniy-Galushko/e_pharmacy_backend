import createHttpError from 'http-errors';
import {
  deleteProduct,
  listOfBasket,
  orderProcessing,
  updateBasket,
} from '../services/order.js';

export const listOfBasketController = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const basket = await listOfBasket(token);

  res.status(200).json({
    status: 200,
    message: 'Order basket',
    data: { basket },
  });
};

export const updateBasketController = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  console.log(req.query);
  const { id, quantity } = req.query;
  const basket = await updateBasket(token, id, quantity, {
    upsert: true,
  });

  res.status(200).json({
    status: 200,
    message: 'The product has been added to the cart',
    data: basket,
  });
};

export const orderProcessingController = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  const order = await orderProcessing(req, token);

  res.status(201).json({
    status: 201,
    message: 'Your order has been accepted!',
    data: order,
  });
};

export const productRemovalController = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization.split(' ')[1];

  const result = await deleteProduct(token, id);

  if (!result) {
    next(createHttpError(404, 'No such entry found!'));
    return;
  }

  res.status(204).send();
};
