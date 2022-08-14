import { Request, Response, NextFunction } from 'express';
import { SubscribeChannelUseCase } from './SubscribeChannelUseCase';

export class SubscribeChannelController {
  constructor(
    private subscribeChannelUseCase: SubscribeChannelUseCase
  ){}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.subscribeChannelUseCase.execute(req.userId, req.params.channelId)
      res.json("Subscription successful.")
    } catch (error) {
      next(error)
    }
  }
}