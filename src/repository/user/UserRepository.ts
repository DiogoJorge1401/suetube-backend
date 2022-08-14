import { FilterQuery, UpdateQuery } from 'mongoose';
import { HTTPError } from '@/errors/HTTPError';
import { User, UserDocument, UserModel } from '@/model/User';
import { CreateUserDTO, IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  async findUserById(userId: string, errorMsg: string) {
    const user = await UserModel.findById(userId);
    if (!user) throw new HTTPError(errorMsg, 400);
    return user;
  }
  async save(data: CreateUserDTO) {
    try {
      return await UserModel.create(data)
    } catch (error: any) {
      if (error.code)
        throw new HTTPError('Email Unavailable!', 422)
      throw error
    }
  }
  async findOne(query: FilterQuery<User>, errorMsg: string) {
    const user = await UserModel.findOne(query)
    if (!user)
      throw new HTTPError(
        errorMsg
        , 400
      )
    return user
  }

  async updateOne(query: FilterQuery<User>, data: UpdateQuery<User>): Promise<any> {
    return UserModel.updateOne(query, data, { new: true })
  }
  async updateMany(query: FilterQuery<User>, data: UpdateQuery<User>) {
    await UserModel.updateMany(query, data)
  }
  async removeOne(query: FilterQuery<User>) {
    await UserModel.findOneAndRemove(query)
  }

}