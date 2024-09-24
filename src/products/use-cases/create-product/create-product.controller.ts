import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductUseCase } from './create-product.use-case';
import { CreateProductDto } from 'src/products/models/dtos/create-product.dto';

@ApiTags('Produtos')
@Controller('product')
export class CreateProductController {
  constructor(
    @Inject(CreateProductUseCase)
    private readonly productService: CreateProductUseCase,
  ) {}

  @ApiOperation({})
  @Post('create')
  async create(@Body() productDto: CreateProductDto): Promise<string> {
    await this.productService.create(productDto);
    return 'deu boa';
  }
}
