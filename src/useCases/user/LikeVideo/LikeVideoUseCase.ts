import { IVideoRepository } from '@repositories/video/IVideoRepository';

export class LikeVideoUseCase {
  constructor(private videosRepository: IVideoRepository) {}

  async execute(userId: string, videoId: string) {
    const video = await this.videosRepository.findById(videoId);

    const userAlreadyLiked = video.likes.includes(userId);

    if (!userAlreadyLiked) {
      await this.videosRepository.updateOne(
        { _id: videoId },
        {
          $addToSet: { likes: userId },
          $pull: { dislikes: userId },
        },
      );
      return;
    }

    await this.videosRepository.updateOne({ _id: videoId }, { $pull: { likes: userId } });
  }
}
