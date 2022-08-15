import { CommentRepository } from '@/repositories/comment/CommentRepository';
import { AddCommentController } from './AddCommentController';
import { AddCommentUseCase } from './AddCommentUseCase';

const commentRepository = new CommentRepository();
const addCommentUseCase = new AddCommentUseCase(commentRepository);
export const addCommentController = new AddCommentController(addCommentUseCase);
