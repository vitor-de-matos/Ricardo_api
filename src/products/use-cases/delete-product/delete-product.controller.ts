import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteProductUseCase } from './delete-product.use-case';
import {
  ParseIntPipe,
  Controller,
  Delete,
  Inject,
  Param,
} from '@nestjs/common';

@ApiTags('Produtos')
@Controller('product')
export class DeleteProductController {
  constructor(
    @Inject(DeleteProductUseCase)
    private readonly productService: DeleteProductUseCase,
  ) {}

  @ApiOperation({ summary: 'Remover produto' })
  @ApiOkResponse({ description: 'Produto deletado com sucesso' })
  @Delete(':productId/Delete')
  async delete(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<string> {
    await this.productService.delete(productId);
    return 'Produto deletado com sucesso';
  }
}
