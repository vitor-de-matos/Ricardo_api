import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateProductOrderDto } from 'src/products-order/models/dtos/create-products_order.dto';
import { ProductOrderRepository } from 'src/products-order/models/repositories/product-order.repository';

@Injectable()
export class CreateProductOrderUseCase {
  constructor(
    @Inject(ProductOrderRepository)
    private readonly productOrderRepository: ProductOrderRepository,
  ) {}

  async create(productOrderDto: CreateProductOrderDto): Promise<boolean> {
    const productOrderExists = await this.productOrderRepository.productExists(
      productOrderDto.pedidoId,
    );
    if (productOrderExists) {
      throw new ConflictException();
    }
    await this.productOrderRepository.create(productOrderDto);
    return true;
  }
}
