import { VideoRepository } from '@repositories/video/VideoRepository';
import { UpdateVideoController } from './UpdateVideoController';
import { UpdateVideoUseCase } from './UpdateVideoUseCase';

const videoRepositoty = new VideoRepository();
const updateVideoUseCase = new UpdateVideoUseCase(videoRepositoty);
export const updateVideoController = new UpdateVideoController(updateVideoUseCase);
