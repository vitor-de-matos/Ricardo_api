import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCategoryUseCase } from './create-category.use-case';
import { CreateCategoryDto } from 'src/category/models/dtos/create-category.dto';

@ApiTags('Categoria')
@Controller('category')
export class CreateCategoryController {
  constructor(
    @Inject(CreateCategoryUseCase)
    private readonly categoryService: CreateCategoryUseCase,
  ) {}

  @ApiOperation({ summary: 'Criar categoria' })
  @ApiOkResponse({ description: 'Categoria criada com sucesso' })
  @Post('create')
  async create(@Body() CategoryDto: CreateCategoryDto): Promise<string> {
    await this.categoryService.create(CategoryDto);
    return 'Categoria criada com sucesso';
  }
}
