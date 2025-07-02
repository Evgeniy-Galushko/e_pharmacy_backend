import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { loginUserShema, registerUserShema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  logoutUserController,
  registerUserController,
  userInfoController,
} from '../controllers/auth.js';
import { authenticate } from '../middlewares/authenticate.js';

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
router.get('/logout', authenticate, ctrlWrapper(logoutUserController));
router.get('/user-info', authenticate, ctrlWrapper(userInfoController));

export default router;
