import { HTTPError } from '@/errors/HTTPError';
import { IUserRepository } from '@/repository/user/IUserRepository';
import { IVideoRepository } from '@/repository/video/IVideoRepository';

export class DeleteVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository,
    private userRepository: IUserRepository,
  ) { }

  async execute(videoId: string, userId: string) {
    const video = await this.videoRepository.findVideoById(videoId, 'Invalid Video Id')
    await this.userRepository.findUserById(userId, 'Invalid User Id!')

    if (String(video.userId) !== userId)
      throw new HTTPError('Invalid User Id!')

    return await this.videoRepository.removeOne({ _id: videoId })
  }
}