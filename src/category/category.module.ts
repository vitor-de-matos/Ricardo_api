import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './models/entities/category.entity';
import { CreateCategoryController } from './use-cases/create-category/create-category.controller';
import { CreateCategoryUseCase } from './use-cases/create-category/create-category.use-case';
import { CategoryRepository } from './models/repositories/category.repository';
import { FindCategoryController } from './use-cases/find-category/find-category.controller';
import { FindCategoryuseCase } from './use-cases/find-category/find-category.use-case';
import { DeleteCategoryController } from './use-cases/delete-category/delete-category.controller';
import { DeleteCategoryUseCase } from './use-cases/delete-category/delete-category.use-case';
import { UpdateCategoryController } from './use-cases/update-category/update-category.controller';
import { UpdateCategoryUseCase } from './use-cases/update-category/update-category.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [
    CreateCategoryController,
    FindCategoryController,
    UpdateCategoryController,
    DeleteCategoryController,
  ],
  providers: [
    CreateCategoryUseCase,
    FindCategoryuseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
    { provide: CategoryRepository, useClass: CategoryRepository },
  ],
  exports: [CategoryRepository],
})
export class CategoryModule {}
