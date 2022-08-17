import { HTTPError } from '@errors/HTTPError';
import { IUserRepository } from '@repositories/user/IUserRepository';
import { sign } from 'jsonwebtoken';

interface GoogleUseCaseProps {
  username: string;
  email: string;
  img: string;
}

export class GoogleUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(data: GoogleUseCaseProps) {
    if (!data?.email || !data?.img || !data?.username) throw new HTTPError('Missing Fields!');

    const userExists = await this.usersRepository.findOne({ email: data.email }, null);

    const JWT_SECRET = process.env.JWT_SECRET as string;
    let token: string;
    let user: any;

    if (!userExists) {
      const result = await this.usersRepository.save({
        email: data.email,
        username: data.username,
        img: data.img,
        fromGoogle: true,
      });

      token = sign({ id: result._id }, JWT_SECRET);
      user = result.toResponse();
    } else {
      token = sign({ id: userExists._id }, JWT_SECRET);
      user = userExists.toResponse();
    }

    return {
      token,
      user,
    };
  }
}
