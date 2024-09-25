import { ProductOrderRepository } from 'src/products-order/models/repositories/product-order.repository';
import { Inject, Injectable } from '@nestjs/common';
import {
  FindProductOrderDto,
  ProductOrderDto,
} from 'src/products-order/models/dtos/find-products_order.dto';

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
        'order.id AS "Id_pedido"',
        'product.id AS "Id_produto"',
        'user.id AS "Id_usuario"',

        'user.name AS "Nome_usuario"',

        'product.nome AS "Nome_produto"',
        'category.nome AS "Nome_categoria"',
        'product.preco AS "Preco_unitario"',

        'product_order.quantidade AS "Quantidade_pedido"',
        'product_order.precoTotal AS "Preco_total"',

        'order.status AS "Status_pedido"',
      ])
      .leftJoin('product_order.pedido', 'order')
      .leftJoin('product_order.produto', 'product')
      .leftJoin('order.user', 'user')
      .leftJoin('product.category', 'category');

    if (id !== undefined && id !== null) {
      queryBuilder.andWhere('product_order.id = :id', { id });
    }
    if (pedidoId !== undefined && pedidoId !== null) {
      queryBuilder.andWhere('product_order.pedidoId = :pedidoId', { pedidoId });
    }
    if (produtoId !== undefined && produtoId !== null) {
      queryBuilder.andWhere('product_order.produtoId = :produtoId', {
        produtoId,
      });
    }

    const productOrder = await queryBuilder.getRawMany();
    return productOrder;
  }
}
