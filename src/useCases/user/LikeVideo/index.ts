import { VideoRepository } from '@/repository/video/VideoRepository';
import { UserRepository } from '@/repository/user/UserRepository';
import { LikeVideoController } from './LikeVideoController';
import { LikeVideoUseCase } from './LikeVideoUseCase';

const userRepository = new UserRepository();
const videoRepository = new VideoRepository();
const likeVideoUseCase = new LikeVideoUseCase(userRepository, videoRepository)
export const likeVideoController = new LikeVideoController(likeVideoUseCase)