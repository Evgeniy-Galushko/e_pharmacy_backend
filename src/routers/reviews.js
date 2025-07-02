import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { reviewsController } from '../controllers/reviews.js';

const router = Router();

router.get('/', ctrlWrapper(reviewsController));

export default router;
