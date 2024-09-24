import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/category/models/dtos/create-category.dto';
import { CategoryRepository } from 'src/category/models/repositories/category.repository';

@Injectable()
export class CreateCategoryUseCase {
  constructor(
    @Inject(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async create(categoryDto: CreateCategoryDto): Promise<boolean> {
    const categoryExists = await this.categoryRepository.categoryExists(
      categoryDto.nome,
    );
    if (categoryExists) {
      throw new ConflictException();
    }
    await this.categoryRepository.create(categoryDto);
    return true;
  }
}
