import { Request, Response, NextFunction } from 'express';
import { AddVideoUseCase } from './AddVideoUseCase';

export class AddVideoController {
  constructor(private addVideoUseCase: AddVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, description, imgURL, videoURL, tags } = req.body;
      const video = await this.addVideoUseCase.execute({
        title,
        description,
        imgURL,
        videoURL,
        userId: req.userId,
        tags,
      });
      res.status(201).json(video);
    } catch (error) {
      next(error);
    }
  };
}
