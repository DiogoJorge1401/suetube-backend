import { Router } from 'express';
import { authRouter } from './auth';
import { commentRouter } from './comment';
import { userRouter } from './user';
import { videoRouter } from './video';

const routes = Router();

routes
  .use("/auth", authRouter)
  .use('/users', userRouter)
  .use('/videos', videoRouter)
  .use('/comments', commentRouter)

routes.use((err, req, res, next) => {
  return res
    .status(err?.statusCode || 500)
    .json({ message: err.message, ...err })
})

export { routes };
