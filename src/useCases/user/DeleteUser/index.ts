import { UserRepository } from '@/repositories/user/UserRepository';
import { VideoRepository } from '@/repositories/video/VideoRepository';
import { CommentRepository } from '@/repositories/comment/CommentRepository';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

const userRepository = new UserRepository();
const videoRepository = new VideoRepository();
const commentController = new CommentRepository();
const deleteUserUseCase = new DeleteUserUseCase(userRepository, videoRepository, commentController);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);
