import { sign } from 'jsonwebtoken';
import { HTTPError } from '@errors/HTTPError';
import { IUserRepository } from '@repositories/user/IUserRepository';

interface SignInProps {
  password: string;
  username: string;
}

export class SignInUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(data: SignInProps) {
    if (!data?.password || !data?.username) throw new HTTPError('Missing Fields!', 400);

    const userExists = await this.usersRepository.findOne(
      { username: data.username },
      'Incorrect username or password',
    );

    await userExists.compare(data.password);

    const JWT_SECRET = process.env.JWT_SECRET as string;

    const token = sign({ id: userExists._id }, JWT_SECRET);

    const user = userExists.toResponse();

    return {
      token,
      user,
    };
  }
}
