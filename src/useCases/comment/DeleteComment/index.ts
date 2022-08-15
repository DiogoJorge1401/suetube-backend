import { CommentRepository } from '@/repositories/comment/CommentRepository';
import { DeleteCommentController } from './DeleteCommentController';
import { DeleteCommentUseCase } from './DeleteCommentUseCase';

const commentRepository = new CommentRepository();
const deleteCommentUseCase = new DeleteCommentUseCase(commentRepository);
export const deleteCommentController = new DeleteCommentController(deleteCommentUseCase);
