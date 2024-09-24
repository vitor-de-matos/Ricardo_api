import {
  Body,
  Controller,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateCategoryUseCase } from './update-category.use-case';
import { UpdateCategoryDto } from 'src/category/models/dtos/update-category.dto';

@ApiTags('Categoria')
@Controller('category')
export class UpdateCategoryController {
  constructor(
    @Inject(UpdateCategoryUseCase)
    private readonly updateCategoryService: UpdateCategoryUseCase,
  ) {}

  @ApiOperation({ summary: 'Modificar categoria' })
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateCategoryDto,
  ): Promise<string> {
    await this.updateCategoryService.update(id, updateDto);
    return 'Categoria atualizada com sucesso';
  }
}
