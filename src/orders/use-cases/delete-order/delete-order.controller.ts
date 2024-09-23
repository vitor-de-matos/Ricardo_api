import {
  Controller,
  Delete,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteOrderUseCase } from './delete-order.use-case';

@ApiTags('Pedido')
@Controller('order')
export class DeleteOrderController {
  constructor(
    @Inject(DeleteOrderUseCase)
    private readonly orderService: DeleteOrderUseCase,
  ) {}

  @ApiOperation({})
  @ApiOkResponse()
  @Delete(':orderId/Delete')
  async delete(
    @Param('orderId', ParseIntPipe) orderId: number,
  ): Promise<string> {
    await this.orderService.delete(orderId);
    return 'Pedido deletado com sucesso';
  }
}
