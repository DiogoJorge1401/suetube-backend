import { Request, Response, NextFunction } from 'express';
import { SignInUseCase } from './SignInUseCase';

export class SignInController {
  constructor(private signInUseCase: SignInUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token, user } = await this.signInUseCase.execute(req.body);
      res.cookie('access_token', token, { httpOnly: true }).json(user);
    } catch (error) {
      next(error);
    }
  };
}
