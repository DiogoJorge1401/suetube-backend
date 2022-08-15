import { Request, Response, NextFunction } from 'express';
import { GetCommentsUseCase } from './GetCommentsUseCase';

export class GetCommentsController {
  constructor(private getCommentsUseCase: GetCommentsUseCase) { }

  handle = async (req: Request, res: Response, next: NextFunction) => {
    const { videoId } = req.params
    try {
      const comments = await this
        .getCommentsUseCase
        .execute(videoId)

      res.json(comments)
    } catch (error) {
      next(error);
    }
  };
}
