import { IVideoRepository } from '@repositories/video/IVideoRepository';

export class SearchVideoUseCase {
  constructor(private videoRepository: IVideoRepository) {}

  async execute(title: string) {
    return (await this.videoRepository.findMany({ title: { $regex: title, $options: 'i' } }, {})).slice(0, 40);
  }
}
