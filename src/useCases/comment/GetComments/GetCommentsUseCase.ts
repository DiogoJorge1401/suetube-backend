import { ICommentRepository } from '@/repositories/comment/ICommentRepository';

export class GetCommentsUseCase {
  constructor(private commentRepository: ICommentRepository) { }

  async execute(videoId: string) {
    return this.commentRepository.findMany({ videoId }, {})
  }
}
