import mongoose, { Schema } from 'mongoose';

export interface CommentSchema {
  userId: Schema.Types.ObjectId
  videoId: Schema.Types.ObjectId
  description: string
}

const schema = new Schema<CommentSchema>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  videoId: { type: Schema.Types.ObjectId, ref: 'Video', required: true },
  description: { type: String, required: true },
}, { timestamps: true })



export const CommentModel = mongoose.model('Comment', schema)