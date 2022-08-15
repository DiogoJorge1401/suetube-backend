/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTPError } from '@/errors/HTTPError';
import { User, UserDocument, UserModel } from '@/models/User';
import { FilterQuery, PipelineStage, UpdateQuery } from 'mongoose';
import { SortParams } from '../Repository';
import { CreateUserDTO, IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  async save(data: CreateUserDTO) {
    try {
      return await UserModel.create(data);
    } catch (error: any) {
      if (error.code) throw new HTTPError('Email Unavailable!', 422);
      throw error;
    }
  }

  async findById(id: string): Promise<UserDocument> {
    const user = await UserModel.findById(id);
    if (!user) throw new HTTPError('Invalid User Id', 400);
    return user;
  }

  async findMany(query: FilterQuery<User>, sort: SortParams): Promise<UserDocument[]> {
    return await UserModel.find(query).sort(sort);
  }

  async findOne(query: FilterQuery<User>, errorMsg: string) {
    const user = await UserModel.findOne(query);
    if (!user) throw new HTTPError(errorMsg, 400);
    return user;
  }

  async aggregate(query: PipelineStage[]): Promise<UserDocument[]> {
    return UserModel.aggregate(query);
  }

  async updateOne(query: FilterQuery<User>, data: UpdateQuery<User>): Promise<UserDocument> {
    const user = await UserModel.findOne(query);
    if (!user) throw new HTTPError('User not Found', 404);
    return user.updateOne(data, { new: true });
  }

  async updateMany(query: FilterQuery<User>, data: UpdateQuery<User>): Promise<void> {
    await UserModel.updateMany(query, data);
  }

  async removeOne(query: FilterQuery<User>): Promise<void> {
    await UserModel.findOneAndRemove(query);
  }

  async removeMany(query: FilterQuery<User>): Promise<void> {
    await UserModel.deleteMany(query);
  }
}
