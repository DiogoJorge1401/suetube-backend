import { IVideoRepository } from '@/repositories/video/IVideoRepository';

export class GetVideoUseCase {
  constructor(private videoRepository: IVideoRepository) {}

  async execute(videoId: string) {
    const video = await this.videoRepository.findById(videoId);
    return video;
  }
}
