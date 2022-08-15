import { Request, Response, NextFunction } from 'express';
import { GetVideoUseCase } from './GetVideoUseCase';

export class GetVideoController {
  constructor(private getVideoUseCase: GetVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const video = await this.getVideoUseCase.execute(req.params.id);
      res.json(video);
    } catch (error) {
      next(error);
    }
  };
}
