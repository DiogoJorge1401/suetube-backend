import { VideoRepository } from '@repositories/video/VideoRepository';
import { DislikeVideoController } from './DislikeVideoController';
import { DislikeVideoUseCase } from './DislikeVideoUseCase';

const videoRepository = new VideoRepository();
const dislikeVideoUseCase = new DislikeVideoUseCase(videoRepository);
export const dislikeVideoController = new DislikeVideoController(dislikeVideoUseCase);
