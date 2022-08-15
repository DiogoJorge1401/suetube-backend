import { CommentRepository } from '@/repositories/comment/CommentRepository';
import { UpdateCommentController } from './UpdateCommentController';
import { UpdateCommentUseCase } from './UpdateCommentUseCase';

const commentRepository = new CommentRepository();
const updateCommentUseCase = new UpdateCommentUseCase(commentRepository);
export const updateCommentController = new UpdateCommentController(updateCommentUseCase);
