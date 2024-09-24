import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductOrderEntity } from '../entities/products-order.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CreateProductOrderDto } from '../dtos/create-products_order.dto';
import {
  FindProductOrderDto,
  ProductOrderDto,
} from '../dtos/find-products_order.dto';
import { UpdateProductOrderDto } from '../dtos/update-products_order.dto';

@Injectable()
export class ProductOrderRepository {
  constructor(
    @InjectRepository(ProductOrderEntity)
    private readonly repository: Repository<ProductOrderEntity>,
  ) {}

  async create(productOrderDto: CreateProductOrderDto): Promise<boolean> {
    const result = await this.repository.save(productOrderDto);
    return !!result;
  }

  async productExists(
    orderId: number,
  ): Promise<ProductOrderEntity | undefined> {
    const productOrder = await this.repository.findOne({
      where: { pedidoId: orderId },
    });
    return productOrder;
  }

  async find(findProductDto: FindProductOrderDto): Promise<ProductOrderDto[]> {
    const productOrder = await this.repository.find();
    return productOrder;
  }

  async findById(id: number): Promise<ProductOrderEntity | undefined> {
    const productOrder = await this.repository.findOne({ where: { id: id } });
    return productOrder;
  }

  async update(
    id: number,
    productOrderDto: UpdateProductOrderDto,
  ): Promise<boolean> {
    const productOrder = await this.repository.findOne({ where: { id: id } });
    const updatedProductOrder = await this.repository.save({
      ...productOrder,
      ...productOrderDto,
    });
    return !!updatedProductOrder;
  }

  async delete(productOrderId: number): Promise<void> {
    try {
      const result = await this.repository.delete(productOrderId);
      if (result.affected === 0) {
        throw new InternalServerErrorException({
          code: 'PRODUCT_ORDER_NOT_DELETED',
          message: 'Nenhum pedido de produto foi deletado',
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

  queryBuilder(): SelectQueryBuilder<ProductOrderEntity> {
    return this.repository.createQueryBuilder('product_order');
  }
}
