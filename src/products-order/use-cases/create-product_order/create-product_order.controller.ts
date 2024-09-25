import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductOrderUseCase } from './create-product_order.use-case';
import { CreateProductOrderDto } from 'src/products-order/models/dtos/create-products_order.dto';

@ApiTags('Pedido-Produtos')
@Controller('product_order')
export class CreateProductOrderController {
  constructor(
    @Inject(CreateProductOrderUseCase)
    private readonly productOrderService: CreateProductOrderUseCase,
  ) {}

  @ApiOperation({ summary: 'Criar pedido do produto' })
  @ApiOkResponse({ description: 'Pedido do produto criado com sucesso' })
  @Post('create')
  async create(
    @Body() productOrderDto: CreateProductOrderDto,
  ): Promise<string> {
    await this.productOrderService.create(productOrderDto);
    return 'Pedido do produto criado com sucesso';
  }
}
