import { Inject, Injectable } from '@nestjs/common';
import {
  CategoryDto,
  FindCategoryDto,
} from 'src/category/models/dtos/find-category.dto';
import { CategoryRepository } from 'src/category/models/repositories/category.repository';

@Injectable()
export class FindCategoryuseCase {
  constructor(
    @Inject(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async find(categoryDto: FindCategoryDto): Promise<CategoryDto[]> {
    const { id, nome } = categoryDto;

    const queryBuilder = this.categoryRepository
      .queryBuilder()
      .select([
        'category.id AS "Category_id"',
        'Category.nome AS "Category_name"',
      ]);
    if (id !== undefined && id !== null) {
      queryBuilder.andWhere('category.id = :id', { id });
    }
    if (nome !== undefined && nome !== null) {
      queryBuilder.andWhere('LOWER(category.nome) LIKE LOWER(:nome)', {
        nome: `%${nome}%`,
      });
    }

    const category = await queryBuilder.getRawMany();
    return category;
  }
}
