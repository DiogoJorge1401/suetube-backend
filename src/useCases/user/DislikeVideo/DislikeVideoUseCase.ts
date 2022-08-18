import { IVideoRepository } from '@repositories/video/IVideoRepository';

export class DislikeVideoUseCase {
  constructor(private videosRepository: IVideoRepository) {}

  async execute(userId: string, videoId: string) {
    const video = await this.videosRepository.findById(videoId);

    const videoAlreadyDisliked = video.dislikes.includes(userId);

    if (!videoAlreadyDisliked) {
      await this.videosRepository.updateOne(
        { _id: videoId },
        {
          $addToSet: { dislikes: userId },
          $pull: { likes: userId },
        },
      );
      return;
    }

    await this.videosRepository.updateOne({ _id: videoId }, { $pull: { dislikes: userId } });
  }
}
