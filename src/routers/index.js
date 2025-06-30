import { Router } from 'express';
import authRouter from '../routers/auth.js';

const router = Router();

router.use('/user', authRouter);

export default router;
