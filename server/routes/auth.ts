// src/routes/auth.ts
import { Router } from 'express';
import { login, signup, logout } from '../controllers/authController'

const router = Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

export default router;
