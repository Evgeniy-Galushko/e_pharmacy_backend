import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  productsController,
  productsIdController,
} from '../controllers/product.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(productsController));
router.get('/:id', isValidId, ctrlWrapper(productsIdController));

export default router;
