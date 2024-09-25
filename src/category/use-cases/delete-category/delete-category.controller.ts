import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteCategoryUseCase } from './delete-category.use-case';
import {
  ParseIntPipe,
  Controller,
  Delete,
  Inject,
  Param,
} from '@nestjs/common';

@ApiTags('Categoria')
@Controller('category')
export class DeleteCategoryController {
  constructor(
    @Inject(DeleteCategoryUseCase)
    private readonly categoryService: DeleteCategoryUseCase,
  ) {}

  @ApiOperation({ summary: 'Remover categoria' })
  @ApiOkResponse({ description: 'Categoria deletada com sucesso' })
  @Delete(':categoryId/Delete')
  async delete(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<string> {
    await this.categoryService.delete(categoryId);
    return 'Categoria deletada com sucesso';
  }
}
