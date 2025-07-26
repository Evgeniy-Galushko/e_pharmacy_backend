import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  listOfBasketController,
  orderProcessingController,
  productRemovalController,
  updateBasketController,
} from '../controllers/order.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validateBody } from '../middlewares/validateBody.js';
import { validationOrderSchema } from '../validation/order.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(listOfBasketController));
router.put('/update', authenticate, ctrlWrapper(updateBasketController));
router.post(
  '/checkout',
  authenticate,
  validateBody(validationOrderSchema),
  ctrlWrapper(orderProcessingController),
);
router.delete(
  '/remove/:id',
  isValidId,
  authenticate,
  ctrlWrapper(productRemovalController),
);

export default router;
