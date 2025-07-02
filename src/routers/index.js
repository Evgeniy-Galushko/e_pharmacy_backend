import { Router } from 'express';
import authRouter from '../routers/auth.js';
import storesRouter from '../routers/stores.js';
import reviewsRouter from '../routers/reviews.js';

const router = Router();

router.use('/user', authRouter);
router.use('/stores', storesRouter);
router.use('/customer-reviews', reviewsRouter);

export default router;
