import { HTTPError } from '../errors/HTTPError';
import { UserModel } from '../models/User';
import { hash } from 'bcrypt'

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
    console.log(data);
  }
  async google(data: any) {
    if (!data?.password || !data?.username)
      throw new HTTPError('Missing fields!', 400)
  }
}