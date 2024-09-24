import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateProductOrderDto } from 'src/products-order/models/dtos/update-products_order.dto';
import { ProductOrderRepository } from 'src/products-order/models/repositories/product-order.repository';

@Injectable()
export class UpdateProductOrderUseCase {
  constructor(
    @Inject(ProductOrderRepository)
    private readonly productOrderRepository: ProductOrderRepository,
  ) {}

  async update(
    id: number,
    productOrderDto: UpdateProductOrderDto,
  ): Promise<void> {
    const productOrderExists = await this.productOrderRepository.findById(id);
    if (!productOrderExists) {
      throw new NotFoundException();
    }
    try {
      await this.productOrderRepository.update(id, productOrderDto);
    } catch (error) {
      throw new InternalServerErrorException({
        code: 'UPDATE_FAILED',
        message: 'Falha ao atualizar pedido de produto',
      });
    }
  }
}
