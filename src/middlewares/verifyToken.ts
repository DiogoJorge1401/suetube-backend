import { Request, Response, NextFunction } from 'express';
import { decode } from 'jsonwebtoken';
import { UserModel } from '../models/User';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const access_token = req.cookies.access_token || req.headers.authorization?.split(' ')[1];

  if (!access_token) return res.status(401).json('Token is missing');

  try {
    const payload = decode(access_token) as { id: string };

    const user = await UserModel.findById(payload.id);

    if (!user) throw new Error();

    req.userId = payload.id;
    return next();
  } catch (error) {
    res.status(401).json('Incorrect Token');
  }
};
