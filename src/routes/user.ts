import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken';
import { deleteUserController } from '../useCases/user/DeleteUser';
import { dislikeVideoController } from '../useCases/user/DislikeVideo';
import { getUserController } from '../useCases/user/GetUser';
import { likeVideoController } from '../useCases/user/LikeVideo';
import { subscribeChannelController } from '../useCases/user/SubscribeChannel';
import { unsubscribeChannelController } from '../useCases/user/UnsubscribeChannel';
import { updateUserController } from '../useCases/user/UpdateUser';

const userRouter = Router();

// update user
userRouter.put('/', verifyToken, updateUserController.handle);

// delete user
userRouter.delete('/', verifyToken, deleteUserController.handle);

// get a user
userRouter.get('/:id', getUserController.handle);

// subscribe a user
userRouter.post('/subscribe/:channelId', verifyToken, subscribeChannelController.handle);

// unsubscribe a user
userRouter.post('/unsubscribe/:channelId', verifyToken, unsubscribeChannelController.handle);

// like a video
userRouter.post('/like/:videoId', verifyToken, likeVideoController.handle);

// dislike a video
userRouter.post('/dislike/:videoId', verifyToken, dislikeVideoController.handle);

export { userRouter };
