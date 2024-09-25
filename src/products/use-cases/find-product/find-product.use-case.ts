import { Inject, Injectable } from '@nestjs/common';
import {
  FindProductDto,
  ProductDto,
} from 'src/products/models/dtos/find-product.dto';
import { ProductRepository } from 'src/products/models/repositories/product.repository';

@Injectable()
export class FindProductUseCase {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async find(productDto: FindProductDto): Promise<ProductDto[]> {
    const { id, nome, categoriaId } = productDto;

    const queryBuilder = this.productRepository
      .queryBuilder()
      .select(['product.id AS "Product_id"', 'product.nome AS "Product_Name"']);

    if (id !== undefined && id !== null) {
      queryBuilder.andWhere('product.id = :id', { id });
    }
    if (categoriaId !== undefined && categoriaId !== null) {
      queryBuilder.andWhere('product.categoriaId = :categoriaId', {
        categoriaId,
      });
    }
    if (nome !== undefined && nome !== null) {
      queryBuilder.andWhere('LOWER(product.nome) LIKE LOWER(:nome)', {
        nome: `%${nome}%`,
      });
    }

    const product = await queryBuilder.getRawMany();
    return product;
  }
}
