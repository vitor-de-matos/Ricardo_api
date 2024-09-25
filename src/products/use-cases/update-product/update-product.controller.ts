import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateProductUseCase } from './update-product.use-case';
import { UpdateProductDto } from 'src/products/models/dtos/update-product.dto';
import {
  ParseIntPipe,
  Controller,
  Inject,
  Param,
  Patch,
  Body,
} from '@nestjs/common';

@ApiTags('Produtos')
@Controller('product')
export class UpdateProductController {
  constructor(
    @Inject(UpdateProductUseCase)
    private readonly updateProductService: UpdateProductUseCase,
  ) {}

  @ApiOperation({ summary: 'Modificar produto' })
  @ApiOkResponse({ description: 'Produto atualizado com sucesso' })
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateProductDto,
  ): Promise<string> {
    await this.updateProductService.update(id, updateDto);
    return 'Produto atualizado com sucesso';
  }
}
