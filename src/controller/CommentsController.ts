import { Request, Response } from 'express';
import { CommentsService } from '../services/CommentsService';

export class CommentsController {
  private commentsService = new CommentsService()
  
  handle = async (req: Request, res: Response) => {

  }
}