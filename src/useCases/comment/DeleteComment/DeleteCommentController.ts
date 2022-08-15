import { Request, Response, NextFunction } from 'express';
import { DeleteCommentUseCase } from './DeleteCommentUseCase';

export class DeleteCommentController {
  constructor(private deleteCommentUseCase: DeleteCommentUseCase) { }

  handle = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      await this.deleteCommentUseCase.execute(id, req.userId);
      res.json("The comment has been deleted")
    } catch (error) {
      next(error);
    }
  };
}
