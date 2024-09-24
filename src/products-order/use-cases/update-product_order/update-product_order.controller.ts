import {
  Body,
  Controller,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateProductOrderUseCase } from './update-product_order.use-case';
import { UpdateProductOrderDto } from 'src/products-order/models/dtos/update-products_order.dto';

@ApiTags('Pedido-Produtos')
@Controller('product_order')
export class UpdateProductOrderController {
  constructor(
    @Inject(UpdateProductOrderUseCase)
    private readonly updateProductOrderService: UpdateProductOrderUseCase,
  ) {}

  @ApiOperation({ summary: 'Modificar pedido de produto' })
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateProductOrderDto,
  ): Promise<string> {
    await this.updateProductOrderService.update(id, updateDto);
    return 'Pedido de produto atualizado com sucesso';
  }
}
