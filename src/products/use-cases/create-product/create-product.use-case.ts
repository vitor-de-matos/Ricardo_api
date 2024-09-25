import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/products/models/repositories/product.repository';
import { CreateProductDto } from 'src/products/models/dtos/create-product.dto';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async create(productDto: CreateProductDto): Promise<boolean> {
    const productExists = await this.productRepository.productExists(
      productDto.nome,
    );
    if (productExists) {
      throw new ConflictException({
        code: 'ALREADY_EXISTS',
        message: 'Produto ja cadastrado',
      });
    }
    await this.productRepository.create(productDto);
    return true;
  }
}
