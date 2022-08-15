import { Request, Response, NextFunction } from 'express';
import { SignUpUseCase } from './SignUpUseCase';

export class SignUpController {
  constructor(private signUpUseCase: SignUpUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.signUpUseCase.execute(req.body);

      res.status(201).json('User has been created!');
    } catch (error) {
      next(error);
    }
  };
}
