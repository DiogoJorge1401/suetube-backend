import { Comment, CommentDocument } from '@models/Comment';
import { IRepository } from '../Repository';

export type CreateCommentDTO = Pick<Comment, 'userId' | 'videoId' | 'description'>;

export type ICommentRepository = IRepository<Comment, CommentDocument, CreateCommentDTO>;
