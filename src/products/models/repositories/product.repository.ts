import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../entities/product.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CreateProductDto } from '../dtos/create-product.dto';
import { FindProductDto, ProductDto } from '../dtos/find-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {}

  async create(productDto: CreateProductDto): Promise<boolean> {
    const result = await this.repository.save(productDto);
    return !!result;
  }

  async productExists(productName: string): Promise<ProductEntity | undefined> {
    const product = await this.repository.findOne({
      where: { nome: productName },
    });
    return product;
  }

  async find(findProductDto: FindProductDto): Promise<ProductDto[]> {
    const product = await this.repository.find();
    return product;
  }

  async findById(id: number): Promise<ProductEntity | undefined> {
    const product = await this.repository.findOne({ where: { id: id } });
    return product;
  }

  async update(id: number, productDto: UpdateProductDto): Promise<boolean> {
    const product = await this.repository.findOne({ where: { id: id } });
    const updatedProduct = await this.repository.save({
      ...product,
      ...productDto,
    });
    return !!updatedProduct;
  }

  async delete(productId: number): Promise<void> {
    try {
      const result = await this.repository.delete(productId);
      if (result.affected === 0) {
        throw new InternalServerErrorException({
          code: 'PRODUCT_NOT_DELETED',
          message: 'Nenhum produto foi deletado',
        });
      }
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }
    }
  }

  queryBuilder(): SelectQueryBuilder<ProductEntity> {
    return this.repository.createQueryBuilder('product');
  }
}
