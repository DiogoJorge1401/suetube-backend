import { CreateUserDTO, IUserRepository } from '@/repositories/user/IUserRepository';

export class UpdateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(userId: string, data: Partial<CreateUserDTO>) {
    await this.usersRepository.updateOne({ _id: userId }, { $set: data });
  }
}
