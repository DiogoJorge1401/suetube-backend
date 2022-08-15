import { VideoRepository } from '@repositories/video/VideoRepository';
import { UserRepository } from '@repositories/user/UserRepository';
import { SubsVideoController } from './SubsVideoController';
import { SubsVideoUseCase } from './SubsVideoUseCase';

const videoRepositoty = new VideoRepository();
const userRepository = new UserRepository();
const subsVideoUseCase = new SubsVideoUseCase(videoRepositoty, userRepository);
export const subsVideoController = new SubsVideoController(subsVideoUseCase);
