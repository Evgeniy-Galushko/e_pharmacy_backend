import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  nearestController,
  pharmaciesController,
} from '../controllers/nearest.js';

const router = Router();

router.get('/', ctrlWrapper(pharmaciesController));
router.get('/nearest', ctrlWrapper(nearestController));

export default router;
