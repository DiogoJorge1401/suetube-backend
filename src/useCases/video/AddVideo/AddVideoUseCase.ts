import { HTTPError } from '@/errors/HTTPError';
import { CreateVideoDTO, IVideoRepository } from '@/repositories/video/IVideoRepository';

export class AddVideoUseCase {
  constructor(private videoRepository: IVideoRepository) {}

  async execute(videoData: CreateVideoDTO) {
    if (!videoData?.description || !videoData?.imgURL || !videoData?.title || !videoData?.videoURL)
      throw new HTTPError('Missing Fields!', 400);

    return this.videoRepository.save(videoData);
  }
}
