/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Schema } from 'mongoose';

export interface Comment {
  userId: string | Schema.Types.ObjectId;
  videoId: string | Schema.Types.ObjectId;
  description: string;
}
export interface CommentDocument extends Comment {
  createdAt: number;
  updatedAt: number;
  userId: Schema.Types.ObjectId;
  videoId: Schema.Types.ObjectId;
}

const schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    videoId: { type: Schema.Types.ObjectId, ref: 'Video', required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export const CommentModel = mongoose.model('Comment', schema);
