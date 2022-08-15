import { Request, Response, NextFunction } from 'express';
import { LikeVideoUseCase } from './LikeVideoUseCase';

export class LikeVideoController {
  constructor(private likeVideoUseCase: LikeVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.likeVideoUseCase.execute(req.userId, req.params.videoId);
      res.json('The video has been liked.');
    } catch (error) {
      next(error);
    }
  };
}
