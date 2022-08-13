import { HTTPError } from '../errors/HTTPError';
import { UserModel } from '../models/User';
import { VideoModel } from '../models/Video';

export class UsersService {
  async update(userId: string, data: any) {
    const userExists = await UserModel.findById(userId)

    if (!userExists)
      throw new HTTPError('Invalid User ID', 400)

    await userExists.updateOne(data)
  }
  async delete(userId: string) {
    const userExists = await UserModel.findById(userId)

    console.log(userId);
    

    if (!userExists)
      throw new HTTPError('Invalid User ID', 400)

    await userExists.remove()
  }
  async getUser(userId: string) {
    const userExists = await UserModel.findById(userId)

    if (!userExists)
      throw new HTTPError('Invalid User ID', 400)

    return userExists.toResponse
  }
  async subscribe(userId: string, channelId: string) {
    const userExists = await UserModel.findById(userId)

    if (!userExists)
      throw new HTTPError('Invalid User ID', 400)

    const channelExists = await UserModel.findById(channelId)

    if (!channelExists)
      throw new HTTPError('Invalid Channel ID', 400)

    await Promise.all([
      userExists.updateOne({ $push: { subscribers: channelId } }),
      channelExists.updateOne({ $push: { subscribedUsers: userId } })
    ])
  }
  async unsubscribe(userId: string, channelId: string) {
    const userExists = await UserModel.findById(userId)

    if (!userExists)
      throw new HTTPError('Invalid User ID', 400)

    const channelExists = await UserModel.findById(channelId)

    if (!channelExists)
      throw new HTTPError('Invalid Channel ID', 400)

    await Promise.all([
      userExists.updateOne({ $pop: { subscribers: channelId } }),
      channelExists.updateOne({ $pull: { subscribedUsers: userId } })
    ])
  }
  async like(userId: string, videoId: string) {
    const userExists = await UserModel.findById(userId)

    if (!userExists)
      throw new HTTPError('Invalid User ID', 400)

    const videoExists = await VideoModel.findById(videoId)

    if (!videoExists)
      throw new HTTPError('Invalid Video ID', 400)

    await videoExists.updateOne({ $push: { likes: userId } })
  }
  async dislike(userId: string, videoId: string) {
    const userExists = await UserModel.findById(userId)

    if (!userExists)
      throw new HTTPError('Invalid User ID', 400)

    const videoExists = await VideoModel.findById(videoId)

    if (!videoExists)
      throw new HTTPError('Invalid Video ID', 400)

    await videoExists.updateOne({ $push: { dislikes: userId } })
  }
}