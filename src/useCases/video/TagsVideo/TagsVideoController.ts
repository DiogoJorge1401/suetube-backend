import { Request, Response, NextFunction } from 'express';
import { TagsVideoUseCase } from './TagsVideoUseCase';

export class TagsVideoController {
  constructor(private tagsVideoUseCase: TagsVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    const { tags } = req.params;
    try {
      const videos = await this.tagsVideoUseCase.execute(tags);
      res.json(videos);
    } catch (error) {
      next(error);
    }
  };
}
