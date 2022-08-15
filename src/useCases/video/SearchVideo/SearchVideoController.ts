import { Request, Response, NextFunction } from 'express';
import { SearchVideoUseCase } from './SearchVideoUseCase';

export class SearchVideoController {
  constructor(private searchVideoUseCase: SearchVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.params;

    try {
      const videos = await this.searchVideoUseCase.execute(title);
      res.json(videos);
    } catch (error) {
      next(error);
    }
  };
}
