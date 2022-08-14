import { IVideoRepository } from '@/repository/video/IVideoRepository'
import { IUserRepository } from '@/repository/user/IUserRepository'

export class LikeVideoUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private videosRepository: IVideoRepository
  ) { }

  async execute(userId: string, videoId: string) {
    await this.
      usersRepository.
      findUserById(userId, 'Invalid User Id!')

    await this.
      videosRepository.
      findVideoById(videoId, 'Invalid Video Id')

    await this.videosRepository.updateOne({ _id: videoId }, { $push: { likes: userId } })
  }
}