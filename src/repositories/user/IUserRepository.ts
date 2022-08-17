import { User, UserDocument } from '@models/User';
import { IRepository } from '../Repository';

export type CreateUserDTO = Pick<User, 'email' | 'username' | 'img' | 'fromGoogle'> & { password?: string };

export type IUserRepository = IRepository<User, UserDocument, CreateUserDTO>;
