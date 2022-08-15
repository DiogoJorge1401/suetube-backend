import { Video, VideoDocument } from '@/models/Video';
import { IRepository } from '../Repository';

export type CreateVideoDTO = Pick<Video, 'title' | 'description' | 'imgURL' | 'videoURL' | 'userId'>;

export type IVideoRepository = IRepository<Video, VideoDocument, CreateVideoDTO>;
