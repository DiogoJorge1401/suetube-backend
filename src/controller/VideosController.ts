import { Request, Response } from 'express';
import { VideosService } from '../services/VideosService';

export class VideosController {
  private videosService = new VideosService()

  handle = async (req: Request, res: Response) => {

  }
}