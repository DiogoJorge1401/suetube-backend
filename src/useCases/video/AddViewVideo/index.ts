import { VideoRepository } from '@/repositories/video/VideoRepository';
import { AddViewVideoController } from './AddViewVideoController';
import { AddViewVideoUseCase } from './AddViewVideoUseCase';

const videoRepositoty = new VideoRepository();
const addViewVideoUseCase = new AddViewVideoUseCase(videoRepositoty);
export const addViewVideoController = new AddViewVideoController(addViewVideoUseCase);
