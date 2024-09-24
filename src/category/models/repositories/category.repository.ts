import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { FindCategoryDto } from '../dtos/find-category.dto';
import { UpdateCategoryDto } from '../dtos/update-category.dto';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
  ) {}

  async create(categoryDto: CreateCategoryDto): Promise<boolean> {
    const result = await this.repository.save(categoryDto);
    return !!result;
  }

  async categoryExists(
    categoryName: string,
  ): Promise<CategoryEntity | undefined> {
    const category = await this.repository.findOne({
      where: { nome: categoryName },
    });
    return category;
  }

  async find(findCategoryDto: FindCategoryDto): Promise<FindCategoryDto[]> {
    const category = await this.repository.find();
    return category;
  }

  async findById(id: number): Promise<CategoryEntity | undefined> {
    const category = await this.repository.findOne({ where: { id: id } });
    return category;
  }

  async update(id: number, categoryDto: UpdateCategoryDto): Promise<boolean> {
    const category = await this.repository.findOne({ where: { id: id } });
    const updatedCategory = await this.repository.save({
      ...category,
      ...categoryDto,
    });
    return !!updatedCategory;
  }

  async delete(categoryId: number): Promise<void> {
    try {
      const result = await this.repository.delete(categoryId);
      if (result.affected === 0) {
        throw new InternalServerErrorException({
          code: 'CATEGORY_NOT_DELETED',
          message: 'Nenhuma categoria foi deletada',
        });
      }
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }
    }
  }

  queryBuilder(): SelectQueryBuilder<CategoryEntity> {
    return this.repository.createQueryBuilder('category');
  }
}
