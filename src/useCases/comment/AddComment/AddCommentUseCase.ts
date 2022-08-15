import { CreateCommentDTO, ICommentRepository } from '@/repositories/comment/ICommentRepository';
import { HTTPError } from '@/errors/HTTPError';

export class AddCommentUseCase {
  constructor(private commentRepository: ICommentRepository) { }

  async execute(commentData: CreateCommentDTO) {
    if (
      !commentData.description ||
      !commentData.videoId
    ) throw new HTTPError('Missing Fields!');

    return await this.commentRepository.save(commentData);
  }
}
