import { HTTPError } from '@/errors/HTTPError';
import { CreateVideoDTO, IVideoRepository } from '@/repositories/video/IVideoRepository';

interface UpdateVideoProps {
  videoId: string;
  userId: string;
  videoData: Partial<CreateVideoDTO>;
}

export class UpdateVideoUseCase {
  constructor(private videoRepository: IVideoRepository) {}

  async execute({ userId, videoData, videoId }: UpdateVideoProps) {
    const video = await this.videoRepository.findById(videoId);

    if (String(video.userId) !== userId) throw new HTTPError('Invalid User Id!');

    return await this.videoRepository.updateOne({ _id: videoId }, { $set: videoData });
  }
}
