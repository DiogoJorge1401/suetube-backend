import { Request, Response, NextFunction } from 'express';
import { AddViewVideoUseCase } from './AddViewVideoUseCase';

export class AddViewVideoController {
  constructor(
    private addViewVideoUseCase: AddViewVideoUseCase
  ){}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.addViewVideoUseCase.execute(req.params.id)
      res.json("The view has been increased.")
    } catch (error) {
      next(error)
    }
  }
}