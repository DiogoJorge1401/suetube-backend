import { CommentRepository } from '@repositories/comment/CommentRepository';
import { GetCommentsController } from './GetCommentsController';
import { GetCommentsUseCase } from './GetCommentsUseCase';

const commentRepository = new CommentRepository();
const getCommentsUseCase = new GetCommentsUseCase(commentRepository);
export const getCommentsController = new GetCommentsController(getCommentsUseCase);
