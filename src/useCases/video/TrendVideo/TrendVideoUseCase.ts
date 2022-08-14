import { IVideoRepository } from '@/repository/video/IVideoRepository';

export class TrendVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository,
  ) { }

  async execute() {
    return this.videoRepository.findAndSort({ videoViews: -1 }, {})
  }
}