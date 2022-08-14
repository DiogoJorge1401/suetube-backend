import { Request, Response, NextFunction } from 'express';
import { RandomVideoUseCase } from './RandomVideoUseCase';

export class RandomVideoController {
  constructor(
    private randomVideoUseCase: RandomVideoUseCase
  ){}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const videos = await this.randomVideoUseCase.execute()
      res.json(videos)
    } catch (error) {
      next(error)
    }
  }
}