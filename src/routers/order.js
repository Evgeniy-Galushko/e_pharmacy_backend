import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  listOfBasketController,
  orderProcessingController,
  updateBasketController,
} from '../controllers/order.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validateBody } from '../middlewares/validateBody.js';
import { validationOrderSchema } from '../validation/order.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(listOfBasketController));
router.put('/update', authenticate, ctrlWrapper(updateBasketController));
router.post(
  '/checkout',
  authenticate,
  validateBody(validationOrderSchema),
  ctrlWrapper(orderProcessingController),
);

export default router;
