import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from 'src/category/models/repositories/category.repository';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(
    @Inject(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async delete(categoryId: number): Promise<void> {
    const categoryExists = await this.categoryRepository.findById(categoryId);
    if (!categoryExists) {
      throw new NotFoundException();
    }
    await this.categoryRepository.delete(categoryId);
  }
}
