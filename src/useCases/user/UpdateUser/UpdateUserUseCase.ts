import { IUserRepository } from '@/repository/user/IUserRepository';

export class UpdateUserUseCase{
  constructor(
    private usersRepository: IUserRepository,
  ) { }

  async execute(userId: string, data: any){
    const userExists = await this.
      usersRepository.
      findUserById(userId, 'Invalid User Id!');


    await this
      .usersRepository
      .updateOne({ _id: userExists._id }, { $set: data })
  }
}