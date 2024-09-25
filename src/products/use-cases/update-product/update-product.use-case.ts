import { ProductRepository } from 'src/products/models/repositories/product.repository';
import { UpdateProductDto } from 'src/products/models/dtos/update-product.dto';
import {
  InternalServerErrorException,
  NotFoundException,
  Injectable,
  Inject,
} from '@nestjs/common';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async update(id: number, productDto: UpdateProductDto): Promise<void> {
    const productExists = await this.productRepository.findById(id);
    if (!productExists) {
      throw new NotFoundException({
        code: 'PRODUCT_NOT_FOUND',
        message: 'Produto não encontrado',
      });
    }
    try {
      await this.productRepository.update(id, productDto);
    } catch (error) {
      throw new InternalServerErrorException({
        code: 'UPDATE_FAILED',
        message: 'Falha ao atualizar produto',
      });
    }
  }
}
