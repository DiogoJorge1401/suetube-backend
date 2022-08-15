import { Router } from 'express';
import { googleController } from '../useCases/auth/Google';
import { signInController } from '../useCases/auth/SignIn';
import { signUpController } from '../useCases/auth/SignUp';

const authRouter = Router();

// CREATE A USER
authRouter.post('/signup', signUpController.handle);

// SIGN IN
authRouter.post('/signin', signInController.handle);

// GOOGLE AUTH
authRouter.post('/google', googleController.handle);

export { authRouter };
