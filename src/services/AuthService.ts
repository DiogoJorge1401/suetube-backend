import { HTTPError } from '../errors/HTTPError';
import { UserModel } from '../models/User';
import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

export class AuthService {
  async signUp(data: any) {
    try {
      if (
        !data?.email ||
        !data?.password ||
        !data?.username
      )
        throw new HTTPError('Missing fields!', 400)

      const hashedPassword = await hash(data.password, 12)

      await UserModel.create({
        email: data.email,
        username: data.username,
        password: hashedPassword
      })

    } catch (error: any) {
      if (error.code)
        throw new HTTPError('Email Unavailable!', 422)
      throw error
    }
  }
  async signIn(data: any) {
    if (!data?.password || !data?.username)
      throw new HTTPError('Missing fields!', 400)

    const userExists = await UserModel.findOne({ username: data.username })

    if (!userExists)
      throw new HTTPError(
        "Incorrect username or password"
        , 400
      )

    const passwordsMatch = await compare(data.password, userExists.password)

    if (!passwordsMatch)
      throw new HTTPError(
        "Incorrect username or password"
        , 400
      )

    const JWT_SECRET = process.env.JWT_SECRET as string

    const token = sign({ id: userExists._id }, JWT_SECRET)

    const { password, __v,...user } = userExists.toObject() as any

    return {
      token,
      user
    }
  }
  async google(data: any) {
    if (!data?.password || !data?.username)
      throw new HTTPError('Missing fields!', 400)
  }
}