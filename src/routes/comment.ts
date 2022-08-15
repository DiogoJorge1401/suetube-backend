import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken';
import { addCommentController } from '../useCases/comment/AddComment';
import { deleteCommentController } from '../useCases/comment/DeleteComment';
import { getCommentsController } from '../useCases/comment/GetComments';
import { updateCommentController } from '../useCases/comment/UpdateComment';

const commentRouter = Router();

commentRouter.post(
  '/', verifyToken, addCommentController.handle
);
commentRouter.put(
  '/:id', verifyToken, updateCommentController.handle
);
commentRouter.delete(
  '/:id', verifyToken, deleteCommentController.handle
);
commentRouter.get(
  '/:videoId', verifyToken, getCommentsController.handle
);

export { commentRouter };
