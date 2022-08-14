import { HTTPError } from '@/errors/HTTPError'
import { IUserRepository } from '@/repository/user/IUserRepository'
import { CreateVideoDTO, IVideoRepository } from '@/repository/video/IVideoRepository'

export class AddVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository,
    private userRepository: IUserRepository,
  ) { }

  async execute(videoData: CreateVideoDTO, userId: string) {

    if (
      !videoData?.description ||
      !videoData?.imgURL ||
      !videoData?.title ||
      !videoData?.videoURL
    ) throw new HTTPError('Missing fields!', 400)

    await this.
      userRepository.
      findUserById(userId, 'Invalid User Id!')

    return this.videoRepository.save({
      userId,
      ...videoData
    })
  }
}