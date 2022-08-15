import { Router } from 'express';
import { authRouter } from './auth';
import { commentRouter } from './comment';
import { userRouter } from './user';
import { videoRouter } from './video';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/users', userRouter);
routes.use('/videos', videoRouter);
routes.use('/comments', commentRouter);

export { routes };
