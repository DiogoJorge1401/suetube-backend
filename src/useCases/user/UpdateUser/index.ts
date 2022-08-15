import { UserRepository } from '@repositories/user/UserRepository';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const userRepository = new UserRepository();
const updateUserUseCase = new UpdateUserUseCase(userRepository);
export const updateUserController = new UpdateUserController(updateUserUseCase);
