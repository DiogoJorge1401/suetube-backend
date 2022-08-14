import { Request, Response, NextFunction } from 'express';
import { UpdateVideoUseCase } from './UpdateVideoUseCase';

export class UpdateVideoController {
  constructor(
    private updateVideoUseCase: UpdateVideoUseCase
  ){}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const video = await this.updateVideoUseCase.execute(req.params.id, req.userId, req.body)
      res.json(video)
    } catch (error) {
      next(error)
    }
  }
}