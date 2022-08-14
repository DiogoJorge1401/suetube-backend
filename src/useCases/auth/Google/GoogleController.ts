import { Request, Response, NextFunction } from 'express';
import { GoogleUseCase } from './GoogleUseCase';

export class GoogleController {
  constructor(
    private GoogleUseCase: GoogleUseCase
  ){}

  handle=async(req: Request, res: Response, next: NextFunction) =>{
     try {
      
     } catch (error) {
      next(error)
     }
  }
}