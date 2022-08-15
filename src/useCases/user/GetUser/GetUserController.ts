import { Request, Response, NextFunction } from 'express';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.getUserUseCase.execute(req.params.id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };
}
