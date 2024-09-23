import {
  Body,
  Controller,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateOrderUseCase } from './update-order.use-case';
import { UpdateOrderDto } from 'src/orders/models/dtos/update-order.dto';

@ApiTags('Pedido')
@Controller('order')
export class UpdateOrderController {
  constructor(
    @Inject(UpdateOrderUseCase)
    private readonly updateOrderService: UpdateOrderUseCase,
  ) {}

  @ApiOperation({ summary: 'Modificar pedido' })
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateOrderDto,
  ): Promise<string> {
    await this.updateOrderService.update(id, updateDto);
    return 'Pedido atalizado com sucesso';
  }
}
