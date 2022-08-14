import { Request, Response, NextFunction } from 'express';
import { TrendVideoUseCase } from './TrendVideoUseCase';

export class TrendVideoController {
  constructor(
    private trendVideoUseCase: TrendVideoUseCase
  ){}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const videos = await this.trendVideoUseCase.execute()
      res.json(videos)
    } catch (error) {
      next(error)
    }
  }
}