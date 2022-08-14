import { Request, Response, NextFunction } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase
  ){}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.updateUserUseCase.execute(req.userId, req.body)
      res.send()
    } catch (error) {
      next(error)
    }
  }
}