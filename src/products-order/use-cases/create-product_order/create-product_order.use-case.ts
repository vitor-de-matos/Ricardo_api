import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateProductOrderDto } from 'src/products-order/models/dtos/create-products_order.dto';
import { ProductOrderRepository } from 'src/products-order/models/repositories/product-order.repository';
import { ProductRepository } from 'src/products/models/repositories/product.repository';

@Injectable()
export class CreateProductOrderUseCase {
  constructor(
    @Inject(ProductOrderRepository)
    private readonly productOrderRepository: ProductOrderRepository,
    @Inject(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async create(productOrderDto: CreateProductOrderDto): Promise<boolean> {
    const productOrderExists = await this.productOrderRepository.productExists(
      productOrderDto.pedidoId,
    );
    if (productOrderExists) {
      throw new ConflictException({
        code: 'ALREADY_EXISTS',
        message: 'pedido de produto já existe',
      });
    }
    const produto = await this.productRepository.findById(
      productOrderDto.produtoId,
    );

    const totalPrice = productOrderDto.quantidade * produto.preco;

    productOrderDto.precoTotal = totalPrice;
    await this.productOrderRepository.create(productOrderDto);
    return true;
  }
}
