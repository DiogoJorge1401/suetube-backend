/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { compare } from 'bcrypt';
import mongoose, { Document, Model, Schema } from 'mongoose';
import { HTTPError } from '../errors/HTTPError';

export interface User {
  username: string;
  email: string;
  password: string;
  img?: string;
  subscribers: number;
  subscribedUsers: string[];
}

export interface UserDocument extends User {
  _id: string;
  createdAt: number;
  updatedAt: number;
  toResponse(): User;
  compare(candidate: string): Promise<boolean>;
}

const schema = new Schema<UserDocument>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String },
    subscribers: { type: Number, default: 0 },
    subscribedUsers: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
  },
  { timestamps: true },
);

schema.methods.toResponse = function () {
  const { password, __v, ...user } = this.toObject() as User & { __v: number };

  return user;
};

schema.methods.compare = async function (candidate: string) {
  const passwordsMatch = await compare(candidate, this.password);

  if (!passwordsMatch) throw new HTTPError('Incorrect username or password!', 400);
  return true;
};

export const UserModel = mongoose.model<UserDocument>('User', schema);
