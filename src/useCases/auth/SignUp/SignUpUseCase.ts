import { hash } from 'bcrypt'
import { HTTPError } from '@/errors/HTTPError'
import { IUserRepository } from '@/repository/user/IUserRepository'

export class SignUpUseCase{
  constructor(private usersRepository: IUserRepository) { }

  async execute(data: any) {
    if (
      !data?.email ||
      !data?.password ||
      !data?.username
    )
      throw new HTTPError('Missing fields!', 400)

    const hashedPassword = await hash(data.password, 12)

    await this.usersRepository.save({
      email: data.email,
      username: data.username,
      password: hashedPassword
    })
  }
}