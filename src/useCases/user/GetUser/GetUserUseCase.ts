import { IUserRepository } from '@repositories/user/IUserRepository';

export class GetUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(userId: string) {
    const userExists = await this.usersRepository.findById(userId);

    return userExists.toResponse();
  }
}
