import { Request, Response, NextFunction } from 'express';

export const handleErrors = (err, req: Request, res: Response, next: NextFunction) => {
  if (!err) next();
  return res.status(err?.statusCode || 500).json({ message: err.message, ...err });
};
