import { UserRepository } from '@/repository/user/UserRepository';
import { VideoRepository } from '@/repository/video/VideoRepository';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

const userRepository = new UserRepository();
const videoRepository = new VideoRepository();
const deleteUserUseCase = new DeleteUserUseCase(userRepository, videoRepository)
export const deleteUserController = new DeleteUserController(deleteUserUseCase)