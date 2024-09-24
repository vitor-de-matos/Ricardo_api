import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProductOrderRepository } from 'src/products-order/models/repositories/product-order.repository';

@Injectable()
export class DeleteProductOrderUseCase {
  constructor(
    @Inject(ProductOrderRepository)
    private readonly productOrderRepository: ProductOrderRepository,
  ) {}

  async delete(productOrderId: number): Promise<void> {
    const productExists =
      await this.productOrderRepository.findById(productOrderId);
    if (!productExists) {
      throw new NotFoundException();
    }
    await this.productOrderRepository.delete(productOrderId);
  }
}
