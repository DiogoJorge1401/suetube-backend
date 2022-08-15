import { VideoRepository } from '@repositories/video/VideoRepository';
import { RandomVideoController } from './RandomVideoController';
import { RandomVideoUseCase } from './RandomVideoUseCase';

const videoRepositoty = new VideoRepository();
const randomVideoUseCase = new RandomVideoUseCase(videoRepositoty);
export const randomVideoController = new RandomVideoController(randomVideoUseCase);
