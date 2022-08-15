import { UserRepository } from '@repositories/user/UserRepository';
import { UnsubscribeChannelController } from './UnsubscribeChannelController';
import { UnsubscribeChannelUseCase } from './UnsubscribeChannelUseCase';

const userRepository = new UserRepository();
const unsubscribeChannelUseCase = new UnsubscribeChannelUseCase(userRepository);
export const unsubscribeChannelController = new UnsubscribeChannelController(unsubscribeChannelUseCase);
