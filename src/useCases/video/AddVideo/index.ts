import { VideoRepository } from '@/repositories/video/VideoRepository';
import { AddVideoController } from './AddVideoController';
import { AddVideoUseCase } from './AddVideoUseCase';

const videoRepositoty = new VideoRepository();
const addVideoUseCase = new AddVideoUseCase(videoRepositoty);
export const addVideoController = new AddVideoController(addVideoUseCase);
