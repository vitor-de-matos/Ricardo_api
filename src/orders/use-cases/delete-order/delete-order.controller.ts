import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteOrderUseCase } from './delete-order.use-case';
import {
  ParseIntPipe,
  Controller,
  Delete,
  Inject,
  Param,
} from '@nestjs/common';

@ApiTags('Pedido')
@Controller('order')
export class DeleteOrderController {
  constructor(
    @Inject(DeleteOrderUseCase)
    private readonly orderService: DeleteOrderUseCase,
  ) {}

  @ApiOperation({ summary: 'Remover pedido' })
  @ApiOkResponse({ description: 'Pedido deletado com sucesso' })
  @Delete(':orderId/Delete')
  async delete(
    @Param('orderId', ParseIntPipe) orderId: number,
  ): Promise<string> {
    await this.orderService.delete(orderId);
    return 'Pedido deletado com sucesso';
  }
}
