import { IUserRepository } from '@/repository/user/IUserRepository'

export class GetUserUseCase {

  constructor(
    private usersRepository: IUserRepository,
  ) { }

  async execute(userId: string) {
    const userExists = await this.
      usersRepository.
      findUserById(userId, 'Invalid User Id!')

    return userExists.toResponse()
  }
}