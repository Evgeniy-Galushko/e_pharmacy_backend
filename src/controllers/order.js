import { listOfOrders, updaateOrder } from '../services/order.js';

export const listOfOrdersController = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const orders = await listOfOrders(token);

  res.status(200).json({
    status: 200,
    message: 'Order basket',
    data: { orders },
  });
};

export const updateOrderController = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const idProduct = req.query.id;
  const order = await updaateOrder(token, idProduct, {
    upsert: true,
  });

  res.status(200).json({
    status: 200,
    message: 'The product has been added to the cart',
    data: order,
  });
};
