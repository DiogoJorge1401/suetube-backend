import { IVideoRepository } from '@repositories/video/IVideoRepository';

export class TrendVideoUseCase {
  constructor(private videoRepository: IVideoRepository) {}

  async execute() {
    return this.videoRepository.findMany({}, { videoViews: -1 });
  }
}
