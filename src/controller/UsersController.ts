import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

export class UsersController {
  private createCommentUseCase = new UsersService()

  findUsers = async (req: Request, res: Response) => {
    await this.createCommentUseCase.findUsers()
  }
}