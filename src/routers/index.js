import { Router } from 'express';
import authRouter from '../routers/auth.js';
import storesRouter from '../routers/stores.js';
import reviewsRouter from '../routers/reviews.js';
import productRouter from '../routers/product.js';
import orderRouter from '../routers/order.js';

const router = Router();

router.use('/user', authRouter);
router.use('/stores', storesRouter);
router.use('/customer-reviews', reviewsRouter);
router.use('/products', productRouter);
router.use('/cart', orderRouter);

export default router;
