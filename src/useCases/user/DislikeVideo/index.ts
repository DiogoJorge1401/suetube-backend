import { VideoRepository } from '@/repository/video/VideoRepository';
import { UserRepository } from '@/repository/user/UserRepository';
import { DislikeVideoController } from './DislikeVideoController';
import { DislikeVideoUseCase } from './DislikeVideoUseCase';

const userRepository = new UserRepository();
const videoRepository = new VideoRepository();
const dislikeVideoUseCase = new DislikeVideoUseCase(userRepository, videoRepository)
export const dislikeVideoController = new DislikeVideoController(dislikeVideoUseCase)