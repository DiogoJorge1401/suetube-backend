import { FilterQuery, PipelineStage, SortOrder, UpdateQuery } from 'mongoose'
import { Video, VideoDocument } from '@/model/Video'

export type CreateVideoDTO = Pick<VideoDocument, 'title' | 'description' | 'imgURL' | 'videoURL' | 'userId'>

export type SortParams = {
  [key: string]: SortOrder | {
    $meta: "textScore"
  }
}

export interface IVideoRepository {
  save(data: CreateVideoDTO): Promise<VideoDocument>
  findVideoById(videoId: string, errorMsg: string): Promise<VideoDocument>
  findOne(query: FilterQuery<Video>, errorMsg: string): Promise<VideoDocument>
  findMany(query: FilterQuery<Video>): Promise<VideoDocument[]>
  findAndSort(sort: SortParams, query: FilterQuery<Video>): Promise<VideoDocument[]>
  aggregate(query: PipelineStage[]): Promise<VideoDocument[]>
  updateOne(query: FilterQuery<Video>, data: UpdateQuery<Video>): Promise<VideoDocument>
  updateMany(query: FilterQuery<Video>, data: UpdateQuery<Video>): Promise<void>
  removeOne(query: FilterQuery<Video>): Promise<void>
  removeMany(query: FilterQuery<Video>): Promise<void>
}