import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindCategoryuseCase } from './find-category.use-case';
import {
  CategoryDto,
  FindCategoryDto,
} from 'src/category/models/dtos/find-category.dto';

@ApiTags('Categoria')
@Controller('category')
export class FindCategoryController {
  constructor(
    @Inject(FindCategoryuseCase)
    private readonly categoryService: FindCategoryuseCase,
  ) {}

  @ApiOperation({ summary: 'Buscar categoria' })
  @ApiOkResponse({ type: CategoryDto })
  @Get('find')
  async find(@Query() categoryDto: FindCategoryDto): Promise<CategoryDto[]> {
    return await this.categoryService.find(categoryDto);
  }
}
