import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  FindProductOrderDto,
  ProductOrderDto,
} from 'src/products-order/models/dtos/find-products_order.dto';
import { FindProductOrderUseCase } from './find-product_order.use-case';

@ApiTags('Pedido-Produtos')
@Controller('product_order')
export class FindProductOrderController {
  constructor(
    @Inject(FindProductOrderUseCase)
    private readonly productOrderService: FindProductOrderUseCase,
  ) {}

  @ApiOperation({ summary: 'Buscar pedidos de produtos' })
  @ApiOkResponse()
  @Get('find')
  async find(
    @Query() productOrderDto: FindProductOrderDto,
  ): Promise<ProductOrderDto[]> {
    return await this.productOrderService.find(productOrderDto);
  }
}
