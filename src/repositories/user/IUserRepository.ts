import { User, UserDocument } from '@/models/User';
import { IRepository } from '../Repository';

export type CreateUserDTO = Pick<User, 'email' | 'password' | 'username'>;

export type IUserRepository = IRepository<User, UserDocument, CreateUserDTO>;
