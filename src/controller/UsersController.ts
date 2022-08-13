import { NextFunction, Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

export class UsersController {
  private createCommentUseCase = new UsersService()

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.createCommentUseCase.update(req.userId, req.body)
      res.send()
    } catch (error) {
      next(error)
    }
  }
  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.createCommentUseCase.delete(req.userId)
      res.send()
    } catch (error) {
      next(error)
    }
  }
  getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {      
      const user = await this.createCommentUseCase.getUser(req.userId)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
  subscribe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.createCommentUseCase.subscribe(req.userId, req.params.channelId)
      res.send()
    } catch (error) {
      next(error)
    }
  }
  unsubscribe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.createCommentUseCase.unsubscribe(req.userId, req.params.channelId)
      res.send()
    } catch (error) {
      next(error)
    }
  }
  like = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.createCommentUseCase.like(req.userId, req.params.videoId)
      res.send()
    } catch (error) {
      next(error)
    }
  }
  dislike = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.createCommentUseCase.dislike(req.userId, req.params.videoId)
      res.send()
    } catch (error) {
      next(error)
    }
  }
}