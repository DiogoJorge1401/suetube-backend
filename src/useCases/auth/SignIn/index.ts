import { UserRepository } from '@/repositories/user/UserRepository';
import { SignInController } from './SignInController';
import { SignInUseCase } from './SignInUseCase';

const userRepository = new UserRepository();
const signInUseCase = new SignInUseCase(userRepository);
export const signInController = new SignInController(signInUseCase);
