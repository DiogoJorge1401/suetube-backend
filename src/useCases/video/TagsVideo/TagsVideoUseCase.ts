import { IVideoRepository } from '@/repository/video/IVideoRepository';

export class TagsVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository,
  ) { }

  async execute(tags: string) {
    const tagsList = tags.split(',').filter(Boolean)

    return (await this.videoRepository.findMany({ tags: { $in: tagsList } })).slice(0, 20)
  }
}