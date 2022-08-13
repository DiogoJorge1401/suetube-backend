import { Request, Response, NextFunction } from 'express'
import { decode } from 'jsonwebtoken'

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const access_token = req.cookies.access_token || req.headers.authorization?.split(' ')[1]

  if (!access_token)
    return res.status(401).json("Token is missing")

  try {
    const payload = decode(access_token) as { id: string }
    req.userId = payload.id
    return next()
  } catch (error) {
    res.status(401).json("Incorrect Token")
  }
}