import { FilterQuery, UpdateQuery } from 'mongoose'
import { User, UserDocument } from '@/model/User'

export type CreateUserDTO = Pick<User, 'email' | 'password' | 'username'>

export interface IUserRepository {
  findUserById(userId: string, errorMsg: string): Promise<UserDocument>
  save(data: CreateUserDTO): Promise<UserDocument>
  findOne(query: FilterQuery<User>, errorMsg: string): Promise<UserDocument>
  updateOne(query: FilterQuery<User>, data: UpdateQuery<User>): Promise<void>
  updateMany(query: FilterQuery<User>, data: UpdateQuery<User>): Promise<void>
  removeOne(query: FilterQuery<User>): Promise<void>
}