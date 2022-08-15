import { IVideoRepository } from '@/repositories/video/IVideoRepository';

export class DislikeVideoUseCase {
  constructor(private videosRepository: IVideoRepository) {}

  async execute(userId: string, videoId: string) {
    await this.videosRepository.findById(videoId);

    await this.videosRepository.updateOne({ _id: videoId }, { $push: { dislikes: userId } });
  }
}
