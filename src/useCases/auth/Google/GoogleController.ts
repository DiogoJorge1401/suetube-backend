import { Request, Response, NextFunction } from 'express';
import { GoogleUseCase } from './GoogleUseCase';

export class GoogleController {
  constructor(private googleUseCase: GoogleUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token, user } = await this.googleUseCase.execute(req.body);
      res.cookie('access_token', token, { httpOnly: true, secure: true, sameSite: 'none' }).json(user);
    } catch (error) {
      next(error);
    }
  };
}
