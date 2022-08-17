import { UserRepository } from '@repositories/user/UserRepository';
import { GoogleController } from './GoogleController';
import { GoogleUseCase } from './GoogleUseCase';

const userRepository = new UserRepository();
const googleUseCase = new GoogleUseCase(userRepository);
export const googleController = new GoogleController(googleUseCase);
