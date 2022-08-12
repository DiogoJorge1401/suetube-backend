import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  private authService = new AuthService()

  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.authService.signUp(req.body)

      res.status(201).json("User has been created!")

    } catch (error) {
      next(error)
    }
  }
  signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await this.authService.signIn(req.body)

    } catch (error) {
      next(error)
    }
  }
  google = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.authService.google(req.body)

    } catch (error) {
      next(error)
    }
  }
}