import { VideoRepository } from '@repositories/video/VideoRepository';
import { DeleteVideoController } from './DeleteVideoController';
import { DeleteVideoUseCase } from './DeleteVideoUseCase';

const videoRepositoty = new VideoRepository();
const deleteVideoUseCase = new DeleteVideoUseCase(videoRepositoty);
export const deleteVideoController = new DeleteVideoController(deleteVideoUseCase);
