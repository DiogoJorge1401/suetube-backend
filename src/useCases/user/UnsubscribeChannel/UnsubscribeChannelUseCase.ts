import { HTTPError } from '@/errors/HTTPError';
import { IUserRepository } from '@/repositories/user/IUserRepository';

export class UnsubscribeChannelUseCase {
  constructor(private usersRepository: IUserRepository) {}
  async execute(userId: string, channelId: string) {
    const userExists = await this.usersRepository.findById(userId);

    await this.usersRepository.findById(channelId);

    if (userId === channelId) throw new HTTPError('Invalid Channel Id!', 400);

    if (!userExists.subscribedUsers.includes(channelId)) throw new HTTPError('You Are Not Subscribed!', 400);

    await Promise.all([
      this.usersRepository.updateOne({ _id: userId }, { $pull: { subscribedUsers: channelId } }),
      this.usersRepository.updateOne({ _id: channelId }, { $inc: { subscribers: -1 } }),
    ]);
  }
}
