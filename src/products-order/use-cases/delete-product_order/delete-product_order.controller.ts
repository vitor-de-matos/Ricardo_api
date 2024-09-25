import {
  Controller,
  Delete,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteProductOrderUseCase } from './delete-product_order.use-case';

@ApiTags('Pedido-Produtos')
@Controller('product_order')
export class DeleteProductOrderController {
  constructor(
    @Inject(DeleteProductOrderUseCase)
    private readonly productOrderService: DeleteProductOrderUseCase,
  ) {}

  @ApiOperation({ summary: 'Remover pedido de produto' })
  @ApiOkResponse({ description: 'Pedido de produto deletado com sucesso' })
  @Delete(':productOrderId/Delete')
  async delete(
    @Param('productOrderId', ParseIntPipe) productOrderId: number,
  ): Promise<string> {
    await this.productOrderService.delete(productOrderId);
    return 'Pedido de produto deletado com sucesso';
  }
}
