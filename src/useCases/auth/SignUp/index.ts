import { UserRepository } from '@/repositories/user/UserRepository';
import { SignUpController } from './SignUpController';
import { SignUpUseCase } from './SignUpUseCase';

const userRepository = new UserRepository();
const signUpUseCase = new SignUpUseCase(userRepository);
export const signUpController = new SignUpController(signUpUseCase);
