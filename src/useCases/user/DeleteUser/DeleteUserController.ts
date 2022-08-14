import { Request, Response, NextFunction } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  constructor(
    private deleteUserUseCase: DeleteUserUseCase
  ) { }

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.deleteUserUseCase.execute(req.userId)
      res.send()
    } catch (error) {
      next(error)
    }
  }
}