import { UserRepository } from '@/repository/user/UserRepository';
import { VideoRepository } from '@/repository/video/VideoRepository';
import { UpdateVideoController } from './UpdateVideoController';
import { UpdateVideoUseCase } from './UpdateVideoUseCase';

const videoRepositoty = new VideoRepository();
const userRepository = new UserRepository();
const updateVideoUseCase = new UpdateVideoUseCase(videoRepositoty, userRepository)
export const updateVideoController = new UpdateVideoController(updateVideoUseCase)