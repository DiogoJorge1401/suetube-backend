import { Router } from 'express';
import { UsersController } from '../controller/UsersController';
import { verifyToken } from '../middlewares/verifyToken';

const userRouter = Router();

const userController = new UsersController()

// update user
userRouter.put('/', verifyToken, userController.update)

// delete user
userRouter.delete('/', verifyToken, userController.delete)

// get a user
userRouter.get('/', verifyToken, userController.getUser)

// subscribe a user
userRouter.post('/subscribe/:channelId', verifyToken, userController.subscribe)

// unsubscribe a user
userRouter.post('/unsubscribe/:channelId', verifyToken, userController.unsubscribe)

// like a video
userRouter.post('/like/:videoId', verifyToken, userController.like)

// dislike a video
userRouter.post('/dislike/:videoId', verifyToken, userController.dislike)

export { userRouter };