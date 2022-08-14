import { UserRepository } from '@/repository/user/UserRepository';
import { VideoRepository } from '@/repository/video/VideoRepository';
import { AddVideoController } from './AddVideoController';
import { AddVideoUseCase } from './AddVideoUseCase';

const videoRepositoty = new VideoRepository();
const userRepository = new UserRepository();
const addVideoUseCase = new AddVideoUseCase(videoRepositoty, userRepository)
export const addVideoController = new AddVideoController(addVideoUseCase)