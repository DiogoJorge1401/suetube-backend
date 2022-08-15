import { ICommentRepository } from '@/repositories/comment/ICommentRepository';

export class UpdateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute() {}
}
