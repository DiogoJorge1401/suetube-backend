import mongoose, { Schema } from 'mongoose';

export interface VideoSchema {
  userID: Schema.Types.ObjectId
  title: string
  description: string
  imgURL: string
  videoURL: string
  videoViews: number
  likes: string[]
  dislikes: string[]
  videoTags: string[]
}

const schema = new Schema<VideoSchema>({
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, },
  description: { type: String, required: true, },
  imgURL: { type: String, required: true, },
  videoURL: { type: String, required: true, },
  videoViews: { type: Number, default: 0 },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
  dislikes: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
  videoTags: [{ type: String, default: [] }],
}, { timestamps: true })



export const VideoModel = mongoose.model('Video', schema)