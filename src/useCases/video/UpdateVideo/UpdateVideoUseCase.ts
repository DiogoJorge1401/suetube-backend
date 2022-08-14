import { HTTPError } from '@/errors/HTTPError';
import { IUserRepository } from '@/repository/user/IUserRepository';
import { IVideoRepository } from '@/repository/video/IVideoRepository';

export class UpdateVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository,
    private userRepository: IUserRepository,
  ) { }

  async execute(videoId: string, userId: string, videoData: any) {
    const video = await this.videoRepository.findVideoById(videoId, 'Invalid Video Id')
    const user = await this.userRepository.findUserById(userId, 'Invalid User Id!')

    if (String(video.userId) !== userId)
      throw new HTTPError('Invalid User Id!')

    return await this.videoRepository.updateOne({ _id: videoId }, { $set: videoData })
  }
}