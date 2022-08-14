import { IVideoRepository } from '@/repository/video/IVideoRepository';

export class GetVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository,
  ) { }

  async execute(videoId: string) {
    const video = await this.videoRepository.findVideoById(videoId, 'Invalid Video ID')
    return video
  }
}