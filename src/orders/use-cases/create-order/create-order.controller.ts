import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrderUseCase } from './create-order.use-case';
import { CreateOrderDto } from 'src/orders/models/dtos/create-order.dto';

@ApiTags('Pedido')
@Controller('order')
export class CreateOrderController {
  constructor(
    @Inject(CreateOrderUseCase)
    private readonly orderService: CreateOrderUseCase,
  ) {}

  @ApiOperation({ summary: 'Adicionar pedido' })
  @ApiOkResponse({ description: 'Pedido criado com sucesso' })
  @Post('create')
  async create(@Body() orderDto: CreateOrderDto): Promise<string> {
    await this.orderService.create(orderDto);
    return 'Pedido criado com sucesso';
  }
}
