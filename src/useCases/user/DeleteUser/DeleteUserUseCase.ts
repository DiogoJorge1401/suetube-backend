import { IVideoRepository } from '@/repository/video/IVideoRepository'
import { IUserRepository } from '@/repository/user/IUserRepository'

export class DeleteUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private videoRepository: IVideoRepository,
  ) { }

  async execute(userId: string) {
    const user = await this.
      userRepository.
      findUserById(userId, 'Invalid User Id!')
    await Promise.all(
      user.
        subscribedUsers.
        map((channelId) => this.userRepository.updateOne({ _id: channelId }, { $inc: { subscribers: -1 } }))
    )
    await this.
      userRepository.
      updateMany(
        { subscribedUsers: userId }, { $pull: { subscribedUsers: userId } }
      )
    await this.videoRepository.removeMany({ userId })
    await this
      .userRepository
      .removeOne({ _id: userId })
  }
}