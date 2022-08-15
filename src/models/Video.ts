/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Schema } from 'mongoose';

export interface Video {
  userId: string;
  title: string;
  description: string;
  imgURL: string;
  videoURL: string;
  videoViews: number;
  likes: string[];
  dislikes: string[];
  tags: string[];
}

export interface VideoDocument extends Video {
  _id: string;
  createdAt: number;
  updatedAt: number;
}

const schema = new Schema<VideoDocument>(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgURL: { type: String, required: true },
    videoURL: { type: String, required: true },
    videoViews: { type: Number, default: 0 },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    dislikes: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    tags: [{ type: String, default: [] }],
  },
  { timestamps: true },
);

export const VideoModel = mongoose.model<VideoDocument>('Video', schema);
