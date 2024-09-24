import {
  Body,
  Controller,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateProductUseCase } from './update-product.use-case';
import { UpdateProductDto } from 'src/products/models/dtos/update-product.dto';

@ApiTags('Produtos')
@Controller('product')
export class UpdateProductController {
  constructor(
    @Inject(UpdateProductUseCase)
    private readonly updateProductService: UpdateProductUseCase,
  ) {}

  @ApiOperation({ summary: 'Modificar produto' })
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateProductDto,
  ): Promise<string> {
    await this.updateProductService.update(id, updateDto);
    return 'Produto atualizado com sucesso';
  }
}
