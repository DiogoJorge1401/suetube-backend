import { UserRepository } from '@/repository/user/UserRepository';
import { VideoRepository } from '@/repository/video/VideoRepository';
import { DeleteVideoController } from './DeleteVideoController';
import { DeleteVideoUseCase } from './DeleteVideoUseCase';

const videoRepositoty = new VideoRepository();
const userRepository = new UserRepository();
const deleteVideoUseCase = new DeleteVideoUseCase(videoRepositoty, userRepository)
export const deleteVideoController = new DeleteVideoController(deleteVideoUseCase)