import mongoose, { Schema } from 'mongoose';

export interface CommentSchema {
  userID: Schema.Types.ObjectId
  videoID: Schema.Types.ObjectId
  description: string
}

const schema = new Schema<CommentSchema>({
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  videoID: { type: Schema.Types.ObjectId, ref: 'Video', required: true },
  description: { type: String, required: true },
}, { timestamps: true })



export const CommentModel = mongoose.model('Comment', schema)