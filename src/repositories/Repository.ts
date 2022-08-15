import { FilterQuery, PipelineStage, SortOrder, UpdateQuery } from 'mongoose';

export type CreateDTO<T, K extends keyof T> = Pick<T, K>;

export type SortParams = {
  [key: string]:
    | SortOrder
    | {
        $meta: 'textScore';
      };
};

export interface IRepository<Model, Document, DTO> {
  save(data: DTO): Promise<Document>;
  findById(id: string): Promise<Document>;
  findOne(query: FilterQuery<Model>, errorMsg: string): Promise<Document>;
  findMany(query: FilterQuery<Model>, sort: SortParams): Promise<Document[]>;
  aggregate(query: PipelineStage[]): Promise<Document[]>;
  updateOne(query: FilterQuery<Model>, data: UpdateQuery<Model>): Promise<Document>;
  updateMany(query: FilterQuery<Model>, data: UpdateQuery<Model>): Promise<void>;
  removeOne(query: FilterQuery<Model>): Promise<void>;
  removeMany(query: FilterQuery<Model>): Promise<void>;
}
