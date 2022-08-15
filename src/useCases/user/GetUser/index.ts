import { UserRepository } from '@repositories/user/UserRepository';
import { GetUserController } from './GetUserController';
import { GetUserUseCase } from './GetUserUseCase';

const userRepository = new UserRepository();
const getUserUseCase = new GetUserUseCase(userRepository);
export const getUserController = new GetUserController(getUserUseCase);
