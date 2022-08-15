import { Request, Response, NextFunction } from 'express';
import { DislikeVideoUseCase } from './DislikeVideoUseCase';

export class DislikeVideoController {
  constructor(private dislikeVideoUseCase: DislikeVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.dislikeVideoUseCase.execute(req.userId, req.params.videoId);
      res.send();
    } catch (error) {
      next(error);
    }
  };
}
