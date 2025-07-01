import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { loginUserShema, registerUserShema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  registerUserController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserShema),
  ctrlWrapper(registerUserController),
);
router.post(
  '/login',
  validateBody(loginUserShema),
  ctrlWrapper(loginUserController),
);
// router.get('/logout');
// router.get('/user-info');

export default router;
