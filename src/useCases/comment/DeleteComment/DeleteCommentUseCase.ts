import { ICommentRepository } from '@/repositories/comment/ICommentRepository';
import { HTTPError } from '@/errors/HTTPError';

export class DeleteCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(commentId: string, userId: string) {
    const comment = await this.commentRepository.findById(commentId);

    if (String(comment.userId) !== userId) throw new HTTPError('Invalid User Id!');

    await this.commentRepository.removeOne({ _id: commentId });
  }
}
