import { IVideoRepository } from '@/repository/video/IVideoRepository';

export class AddViewVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository
  ) { }

  async execute(videoId: string) {
    const video = await this.videoRepository.findVideoById(videoId, 'Invalid Video Id')

    return await this.videoRepository.updateOne({ _id: videoId }, { $inc: { videoViews: 1 } })
  }
}