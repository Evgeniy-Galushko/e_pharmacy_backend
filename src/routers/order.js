import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  listOfOrdersController,
  updateOrderController,
} from '../controllers/order.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(listOfOrdersController));
router.put('/update', authenticate, ctrlWrapper(updateOrderController));
// router.post('/checkout', ctrlWrapper());

export default router;
