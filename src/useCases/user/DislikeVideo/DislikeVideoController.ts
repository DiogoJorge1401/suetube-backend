import { Request, Response, NextFunction } from 'express';
import { DislikeVideoUseCase } from './DislikeVideoUseCase';

export class DislikeVideoController {
  constructor(private dislikeVideoUseCase: DislikeVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.dislikeVideoUseCase.execute(req.userId, req.params.videoId);
      res.json('The video has been disliked.');
    } catch (error) {
      next(error);
    }
  };
}
