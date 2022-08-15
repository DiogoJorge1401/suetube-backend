import { VideoRepository } from '@/repositories/video/VideoRepository';
import { LikeVideoController } from './LikeVideoController';
import { LikeVideoUseCase } from './LikeVideoUseCase';

const videoRepository = new VideoRepository();
const likeVideoUseCase = new LikeVideoUseCase(videoRepository);
export const likeVideoController = new LikeVideoController(likeVideoUseCase);
