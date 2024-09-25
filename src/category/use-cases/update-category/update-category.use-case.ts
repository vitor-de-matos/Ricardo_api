import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateCategoryDto } from 'src/category/models/dtos/update-category.dto';
import { CategoryRepository } from 'src/category/models/repositories/category.repository';

@Injectable()
export class UpdateCategoryUseCase {
  constructor(
    @Inject(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async update(id: number, categoryDto: UpdateCategoryDto): Promise<void> {
    const categoryExists = await this.categoryRepository.findById(id);
    if (!categoryExists) {
      throw new NotFoundException({
        code: 'CATEGORY_NOT_FOUND',
        message: 'Categoria não encontrada',
      });
    }
    try {
      await this.categoryRepository.update(id, categoryDto);
    } catch (error) {
      throw new InternalServerErrorException({
        code: 'UPDATE_FAILED',
        message: 'Falha ao atualizar categoria',
      });
    }
  }
}
