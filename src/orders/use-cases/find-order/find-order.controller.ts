import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindOrderUseCase } from './find-order.use-case';
import { FindOrderDto, OrderDto } from 'src/orders/models/dtos/find-order.dto';

@ApiTags('Pedido')
@Controller('order')
export class FindOrderController {
  constructor(
    @Inject(FindOrderUseCase)
    private readonly orderService: FindOrderUseCase,
  ) {}

  @ApiOperation({ summary: 'Buscar pedido' })
  @ApiOkResponse({ type: FindOrderDto })
  @Get('find')
  async find(@Query() orderDto: FindOrderDto): Promise<OrderDto[]> {
    return await this.orderService.find(orderDto);
  }
}
