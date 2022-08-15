import { hash } from 'bcrypt';
import { HTTPError } from '@/errors/HTTPError';
import { CreateUserDTO, IUserRepository } from '@/repositories/user/IUserRepository';

export class SignUpUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(data: CreateUserDTO) {
    if (!data?.email || !data?.password || !data?.username) throw new HTTPError('Missing Fields!', 400);

    const hashedPassword = await hash(data.password, 12);

    await this.usersRepository.save({
      email: data.email,
      username: data.username,
      password: hashedPassword,
    });
  }
}
