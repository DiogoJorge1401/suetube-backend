import { IVideoRepository } from '@/repository/video/IVideoRepository';

export class RandomVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository,
  ) { }

  async execute() {
    return this.videoRepository.aggregate([{ $sample: { size: 40 } }])
  }
}