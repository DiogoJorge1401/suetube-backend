import { UserRepository } from '@repositories/user/UserRepository';
import { SubscribeChannelController } from './SubscribeChannelController';
import { SubscribeChannelUseCase } from './SubscribeChannelUseCase';

const userRepository = new UserRepository();
const subscribeChannelUseCase = new SubscribeChannelUseCase(userRepository);
export const subscribeChannelController = new SubscribeChannelController(subscribeChannelUseCase);
