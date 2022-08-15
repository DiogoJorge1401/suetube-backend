import { IVideoRepository } from '@/repositories/video/IVideoRepository';

export class AddViewVideoUseCase {
  constructor(private videoRepository: IVideoRepository) {}

  async execute(videoId: string) {
    await this.videoRepository.findById(videoId);

    return await this.videoRepository.updateOne({ _id: videoId }, { $inc: { videoViews: 1 } });
  }
}
