import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from 'src/products/models/repositories/product.repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async delete(productId: number): Promise<void> {
    const productExists = await this.productRepository.findById(productId);
    if (!productExists) {
      throw new NotFoundException({
        code: 'PRODUCT_NOT_FOUND',
        message: 'Produto não encontrado',
      });
    }
    await this.productRepository.delete(productId);
  }
}
