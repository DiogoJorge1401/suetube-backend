import { Router } from 'express';
import { AuthController } from '../controller/AuthController';

const authRouter = Router();

const authController = new AuthController()

// CREATE A USER
authRouter.post('/signup', authController.signUp)

// SIGN IN
authRouter.post('/signin', authController.signIn)

// GOOGLE AUTH
authRouter.post('/google', authController.google)

export { authRouter };