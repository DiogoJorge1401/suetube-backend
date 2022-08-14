import { Request, Response, NextFunction } from 'express';
import { UnsubscribeChannelUseCase } from './UnsubscribeChannelUseCase';

export class UnsubscribeChannelController {
  constructor(
    private unsubscribeChannelUseCase: UnsubscribeChannelUseCase
  ){}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.unsubscribeChannelUseCase.execute(req.userId, req.params.channelId)
      res.json("Unsubscription successful.")
    } catch (error) {
      next(error)
    }
  }
}