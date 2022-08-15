import { HTTPError } from '@/errors/HTTPError';
import { IVideoRepository } from '@/repositories/video/IVideoRepository';

export class DeleteVideoUseCase {
  constructor(private videoRepository: IVideoRepository) {}

  async execute(videoId: string, userId: string) {
    const video = await this.videoRepository.findById(videoId);

    if (String(video.userId) !== userId) throw new HTTPError('Invalid User Id!');

    return await this.videoRepository.removeOne({ _id: videoId });
  }
}
