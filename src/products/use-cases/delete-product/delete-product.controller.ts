import {
  Controller,
  Delete,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteProductUseCase } from './delete-product.use-case';

@ApiTags('Produtos')
@Controller('product')
export class DeleteProductController {
  constructor(
    @Inject(DeleteProductUseCase)
    private readonly productService: DeleteProductUseCase,
  ) {}

  @ApiOperation({})
  @ApiOkResponse()
  @Delete(':productId/Delete')
  async delete(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<string> {
    await this.productService.delete(productId);
    return 'Produto deletado com sucesso';
  }
}
