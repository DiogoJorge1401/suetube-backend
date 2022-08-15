import { IVideoRepository } from '@/repositories/video/IVideoRepository';
import { IUserRepository } from '@/repositories/user/IUserRepository';
import { ICommentRepository } from '@/repositories/comment/ICommentRepository';

export class DeleteUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private videoRepository: IVideoRepository,
    private commentRepository: ICommentRepository,
  ) {}

  async execute(userId: string) {
    const user = await this.userRepository.findById(userId);

    await Promise.all(
      user.subscribedUsers.map((channelId) =>
        this.userRepository.updateOne({ _id: channelId }, { $inc: { subscribers: -1 } }),
      ),
    );

    await this.userRepository.updateMany({ subscribedUsers: userId }, { $pull: { subscribedUsers: userId } });

    await this.videoRepository.removeMany({ userId });

    await this.commentRepository.removeMany({ userId });

    await this.userRepository.removeOne({ _id: userId });
  }
}
