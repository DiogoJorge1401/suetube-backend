import { VideoRepository } from '@/repositories/video/VideoRepository';
import { SearchVideoController } from './SearchVideoController';
import { SearchVideoUseCase } from './SearchVideoUseCase';

const videoRepositoty = new VideoRepository();
const searchVideoUseCase = new SearchVideoUseCase(videoRepositoty);
export const searchVideoController = new SearchVideoController(searchVideoUseCase);
