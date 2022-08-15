import { IVideoRepository } from '@/repositories/video/IVideoRepository';
import { IUserRepository } from '@/repositories/user/IUserRepository';

export class SubsVideoUseCase {
  constructor(private videoRepository: IVideoRepository, private userRepository: IUserRepository) {}

  async execute(userId: string) {
    const user = await this.userRepository.findById(userId);

    const videos = (
      await Promise.all(user.subscribedUsers.map((channel) => this.videoRepository.findMany({ userId: channel }, {})))
    )
      .flat()
      .sort((a, b) => b.createdAt - a.createdAt);

    return videos;
  }
}
