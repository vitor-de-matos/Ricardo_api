import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateOrderUseCase } from './update-order.use-case';
import { UpdateOrderDto } from 'src/orders/models/dtos/update-order.dto';
import {
  ParseIntPipe,
  Controller,
  Inject,
  Param,
  Patch,
  Body,
} from '@nestjs/common';

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
