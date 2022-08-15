import { Request, Response, NextFunction } from 'express';
import { UpdateCommentUseCase } from './UpdateCommentUseCase';

export class UpdateCommentController {
  constructor(private updateCommentUseCase: UpdateCommentUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error);
    }
  };
}
