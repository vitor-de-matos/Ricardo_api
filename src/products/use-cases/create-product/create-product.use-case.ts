import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/products/models/dtos/create-product.dto';
import { ProductRepository } from 'src/products/models/repositories/product.repository';

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
      throw new ConflictException();
    }
    await this.productRepository.create(productDto);
    return true;
  }
}
