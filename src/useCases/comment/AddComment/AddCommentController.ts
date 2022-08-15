import { Request, Response, NextFunction } from 'express';
import { AddCommentUseCase } from './AddCommentUseCase';

export class AddCommentController {
  constructor(private addCommentUseCase: AddCommentUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const comment = await this.addCommentUseCase.execute({ ...req.body, userId: req.userId });
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  };
}
