import { VideoRepository } from '@/repository/video/VideoRepository';
import { TrendVideoController } from './TrendVideoController';
import { TrendVideoUseCase } from './TrendVideoUseCase';

const videoRepositoty = new VideoRepository();
const trendVideoUseCase = new TrendVideoUseCase(videoRepositoty)
export const trendVideoController = new TrendVideoController(trendVideoUseCase)