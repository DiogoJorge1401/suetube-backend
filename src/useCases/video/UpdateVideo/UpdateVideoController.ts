import { Request, Response, NextFunction } from 'express';
import { UpdateVideoUseCase } from './UpdateVideoUseCase';

export class UpdateVideoController {
  constructor(private updateVideoUseCase: UpdateVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const video = await this.updateVideoUseCase.execute({
        userId: req.userId,
        videoData: req.body,
        videoId: req.params.id,
      });
      res.json(video);
    } catch (error) {
      next(error);
    }
  };
}
