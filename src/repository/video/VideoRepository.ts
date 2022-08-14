import { FilterQuery, PipelineStage, UpdateQuery } from 'mongoose';
import { HTTPError } from '@/errors/HTTPError';
import { Video, VideoDocument, VideoModel } from '@/model/Video';
import { CreateVideoDTO, IVideoRepository, SortParams } from './IVideoRepository';

export class VideoRepository implements IVideoRepository {
  async save(data: CreateVideoDTO) {
    return await VideoModel.create(data)
  }
  
  async findVideoById(videoId: string, errorMsg: string) {
    const video = await VideoModel.findById(videoId);
    if (!video) throw new HTTPError(errorMsg, 400);
    return video;
  }
  
  async findOne(query: FilterQuery<Video>, errorMsg: string) {
    const video = await VideoModel.findOne(query)
    if (!video)
      throw new HTTPError(
        errorMsg
        , 400
      )
    return video
  }
  
  async findAndSort(sort: SortParams, query: FilterQuery<Video>) {
    return await VideoModel.find(query).sort(sort)
  }
  
  async findMany(query: FilterQuery<Video>) {
    return await VideoModel.find(query)
  }
  
  async aggregate(query: PipelineStage[]) {
    return await VideoModel.aggregate(query)
  }
  
  async updateOne(query: FilterQuery<Video>, data: UpdateQuery<Video>):Promise<any> {
    return await VideoModel.updateOne(query, data, { new: true, })
  }
  
  async updateMany(query: FilterQuery<Video>, data: UpdateQuery<Video>) {
    await VideoModel.updateMany(query, data)
  }
  
  async removeOne(query: FilterQuery<Video>) {
    await VideoModel.findOneAndRemove(query)
  }
  
  async removeMany(query: FilterQuery<Video>) {
    await VideoModel.deleteMany(query)
  }
} 