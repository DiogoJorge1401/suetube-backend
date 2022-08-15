import { HTTPError } from '@errors/HTTPError';
import { Video, VideoDocument, VideoModel } from '@models/Video';
import { FilterQuery, PipelineStage, UpdateQuery } from 'mongoose';
import { SortParams } from '../Repository';
import { CreateVideoDTO, IVideoRepository } from './IVideoRepository';

export class VideoRepository implements IVideoRepository {
  async save(data: CreateVideoDTO) {
    return await VideoModel.create(data);
  }

  async findById(videoId: string): Promise<VideoDocument> {
    const video = await VideoModel.findById(videoId);
    if (!video) throw new HTTPError('Invalid Video Id', 400);
    return video;
  }

  async findOne(query: FilterQuery<Video>, errorMsg: string) {
    const video = await VideoModel.findOne(query);
    if (!video) throw new HTTPError(errorMsg, 400);
    return video;
  }

  async findMany(query: FilterQuery<Video>, sort: SortParams) {
    return await VideoModel.find(query).sort(sort);
  }

  async aggregate(query: PipelineStage[]) {
    return await VideoModel.aggregate(query);
  }

  async updateOne(query: FilterQuery<Video>, data: UpdateQuery<Video>): Promise<VideoDocument> {
    const video = await VideoModel.findOne(query);
    if (!video) throw new HTTPError('Video not Found', 404);
    return video.updateOne(data, { new: true });
  }

  async updateMany(query: FilterQuery<Video>, data: UpdateQuery<Video>) {
    await VideoModel.updateMany(query, data);
  }

  async removeOne(query: FilterQuery<Video>) {
    await VideoModel.findOneAndRemove(query);
  }

  async removeMany(query: FilterQuery<Video>) {
    await VideoModel.deleteMany(query);
  }
}
