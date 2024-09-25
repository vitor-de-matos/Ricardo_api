import { UpdateCategoryUseCase } from './update-category.use-case';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateCategoryDto } from 'src/category/models/dtos/update-category.dto';
import {
  ParseIntPipe,
  Controller,
  Inject,
  Param,
  Patch,
  Body,
} from '@nestjs/common';

@ApiTags('Categoria')
@Controller('category')
export class UpdateCategoryController {
  constructor(
    @Inject(UpdateCategoryUseCase)
    private readonly updateCategoryService: UpdateCategoryUseCase,
  ) {}

  @ApiOperation({ summary: 'Modificar categoria' })
  @ApiOkResponse({ description: 'Categoria atualizada com sucesso' })
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateCategoryDto,
  ): Promise<string> {
    await this.updateCategoryService.update(id, updateDto);
    return 'Categoria atualizada com sucesso';
  }
}
