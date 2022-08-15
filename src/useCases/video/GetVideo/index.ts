import { VideoRepository } from '@/repositories/video/VideoRepository';
import { GetVideoController } from './GetVideoController';
import { GetVideoUseCase } from './GetVideoUseCase';

const videoRepositoty = new VideoRepository();
const getVideoUseCase = new GetVideoUseCase(videoRepositoty);
export const getVideoController = new GetVideoController(getVideoUseCase);
