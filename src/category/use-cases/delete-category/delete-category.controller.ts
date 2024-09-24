import {
  Controller,
  Delete,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteCategoryUseCase } from './delete-category.use-case';

@ApiTags('Categoria')
@Controller('category')
export class DeleteCategoryController {
  constructor(
    @Inject(DeleteCategoryUseCase)
    private readonly categoryService: DeleteCategoryUseCase,
  ) {}

  @ApiOperation({})
  @ApiOkResponse()
  @Delete(':categoryId/Delete')
  async delete(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<string> {
    await this.categoryService.delete(categoryId);
    return 'Categoria deletada com sucesso';
  }
}
