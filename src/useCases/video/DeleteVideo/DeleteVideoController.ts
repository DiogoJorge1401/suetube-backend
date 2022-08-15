import { Request, Response, NextFunction } from 'express';
import { DeleteVideoUseCase } from './DeleteVideoUseCase';

export class DeleteVideoController {
  constructor(private deleteVideoUseCase: DeleteVideoUseCase) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.deleteVideoUseCase.execute(req.params.id, req.userId);
      res.json('The video has been deleted');
    } catch (error) {
      next(error);
    }
  };
}
