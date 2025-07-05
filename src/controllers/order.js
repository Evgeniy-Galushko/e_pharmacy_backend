import { listOfBasket, updateBasket } from '../services/order.js';

export const listOfOrdersController = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const basket = await listOfBasket(token);

  res.status(200).json({
    status: 200,
    message: 'Order basket',
    data: { basket },
  });
};

export const updateOrderController = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const { id } = req.query;
  const order = await updateBasket(token, id, {
    upsert: true,
  });

  res.status(200).json({
    status: 200,
    message: 'The product has been added to the cart',
    data: order,
  });
};
