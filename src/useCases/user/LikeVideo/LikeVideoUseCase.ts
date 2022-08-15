import { IVideoRepository } from '@/repositories/video/IVideoRepository';

export class LikeVideoUseCase {
  constructor(private videosRepository: IVideoRepository) {}

  async execute(userId: string, videoId: string) {
    await this.videosRepository.findById(videoId);

    await this.videosRepository.updateOne(
      { _id: videoId },
      {
        $addToSet: { likes: userId },
        $pull: { dislikes: userId },
      },
    );
  }
}
