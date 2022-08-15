import { VideoRepository } from '@repositories/video/VideoRepository';
import { TagsVideoController } from './TagsVideoController';
import { TagsVideoUseCase } from './TagsVideoUseCase';

const videoRepositoty = new VideoRepository();
const tagsVideoUseCase = new TagsVideoUseCase(videoRepositoty);
export const tagsVideoController = new TagsVideoController(tagsVideoUseCase);
