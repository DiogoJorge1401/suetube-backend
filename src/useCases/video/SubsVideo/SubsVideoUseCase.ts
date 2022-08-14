import { IVideoRepository } from '@/repository/video/IVideoRepository';
import { IUserRepository } from '@/repository/user/IUserRepository';

export class SubsVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository,
    private userRepository: IUserRepository,
  ) { }

  async execute(userId: string) {
    const user = await this.userRepository.findUserById(userId, 'Invalid User Id')

    const videos = (
      await Promise.all(
        user.subscribedUsers.map(channel => this.videoRepository.findMany({ userId: channel }))
      ))
      .flat()
      .sort((a, b) => b.createdAt - a.createdAt)

    return videos

  }
}