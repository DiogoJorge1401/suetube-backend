import { HTTPError } from '@/errors/HTTPError';
import { Comment, CommentDocument, CommentModel } from '@/models/Comment';
import { FilterQuery, PipelineStage, UpdateQuery } from 'mongoose';
import { SortParams } from '../Repository';
import { CreateCommentDTO, ICommentRepository } from './ICommentRepository';

export class CommentRepository implements ICommentRepository {
  async save(data: CreateCommentDTO): Promise<CommentDocument> {
    return await CommentModel.create(data);
  }

  async findById(id: string): Promise<CommentDocument> {
    const comment = await CommentModel.findById(id);
    if (!comment) throw new HTTPError('Invalid Comment Id');
    return comment;
  }

  async findOne(query: FilterQuery<Comment>, errorMsg: string): Promise<CommentDocument> {
    const comment = await CommentModel.findOne(query);
    if (!comment) throw new HTTPError(errorMsg);
    return comment;
  }

  async findMany(query: FilterQuery<Comment>, sort: SortParams): Promise<CommentDocument[]> {
    return await CommentModel.find(query).sort(sort);
  }

  async aggregate(query: PipelineStage[]): Promise<CommentDocument[]> {
    return await CommentModel.aggregate(query);
  }

  async updateOne(query: FilterQuery<Comment>, data: UpdateQuery<Comment>): Promise<CommentDocument> {
    const comment = await CommentModel.findOne(query);
    if (!comment) throw new HTTPError('Comment not Found', 404);
    return comment.updateOne(data, { new: true });
  }

  async updateMany(query: FilterQuery<Comment>, data: UpdateQuery<Comment>): Promise<void> {
    await CommentModel.updateMany(query, data);
  }

  async removeOne(query: FilterQuery<Comment>): Promise<void> {
    await CommentModel.findOneAndRemove(query);
  }

  async removeMany(query: FilterQuery<Comment>): Promise<void> {
    await CommentModel.deleteMany(query);
  }
}
