import { Request, Response, NextFunction } from 'express';
import { SubsVideoUseCase } from './SubsVideoUseCase';

export class SubsVideoController {
  constructor(private subsVideoUseCase: SubsVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const videos = await this.subsVideoUseCase.execute(req.userId);
      res.json(videos);
    } catch (error) {
      next(error);
    }
  };
}
