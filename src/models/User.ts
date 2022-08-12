import mongoose, { Schema } from 'mongoose';

export interface UserSchema {
  username: string
  email: string
  password: string
  img?: string
  subscribers: number
  subscribedUsers: string[]
}

const schema = new Schema<UserSchema>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  img: { type: String },
  subscribers: { type: Number, default: 0 },
  subscribedUsers: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
}, { timestamps: true })



export const UserModel = mongoose.model('User', schema)