import { Inject, Injectable } from '@nestjs/common';
import {
  FindProductOrderDto,
  ProductOrderDto,
} from 'src/products-order/models/dtos/find-products_order.dto';
import { ProductOrderRepository } from 'src/products-order/models/repositories/product-order.repository';

@Injectable()
export class FindProductOrderUseCase {
  constructor(
    @Inject(ProductOrderRepository)
    private readonly productOrderRepository: ProductOrderRepository,
  ) {}

  async find(productDto: FindProductOrderDto): Promise<ProductOrderDto[]> {
    const { id, pedidoId, produtoId } = productDto;

    const queryBuilder = this.productOrderRepository
      .queryBuilder()
      .select([
        'product_order.id AS "Id"',
        'product_order.quantidade AS "Quantity"',
      ]);

    if (id !== undefined && id !== null) {
      queryBuilder.andWhere('product_order.id = :id', { id });
    }

    const productOrder = await queryBuilder.getRawMany();
    return productOrder;
  }
}
