import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindProductUseCase } from './find-product.use-case';
import {
  FindProductDto,
  ProductDto,
} from 'src/products/models/dtos/find-product.dto';

@ApiTags('Produtos')
@Controller('product')
export class FindProductController {
  constructor(
    @Inject(FindProductUseCase)
    private readonly productService: FindProductUseCase,
  ) {}

  @ApiOperation({ summary: 'Buscar produtos' })
  @ApiOkResponse({ type: ProductDto })
  @Get('find')
  async find(@Query() productDto: FindProductDto): Promise<ProductDto[]> {
    return await this.productService.find(productDto);
  }
}
