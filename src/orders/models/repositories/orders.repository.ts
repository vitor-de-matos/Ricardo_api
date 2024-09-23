import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from '../entities/orders.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { FindOrderDto } from '../dtos/find-order.dto';
import { UpdateOrderDto } from '../dtos/update-order.dto';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly repository: Repository<OrderEntity>,
  ) {}

  async create(orderDto: CreateOrderDto): Promise<boolean> {
    const result = await this.repository.save(orderDto);
    return !!result;
  }

  async find(findOrderDto: FindOrderDto): Promise<FindOrderDto[]> {
    const orders = await this.repository.find();
    return orders;
  }

  async findById(id: number): Promise<OrderEntity | undefined> {
    const order = await this.repository.findOne({ where: { id: id } });
    return order;
  }

  async update(id: number, orderDto: UpdateOrderDto): Promise<boolean> {
    const order = await this.repository.findOne({ where: { id: id } });
    const updatedOrder = await this.repository.save({
      ...order,
      ...orderDto,
    });
    return !!updatedOrder;
  }

  async delete(orderId: number): Promise<void> {
    try {
      const result = await this.repository.delete(orderId);
      if (result.affected === 0) {
        throw new InternalServerErrorException({
          code: 'ORDER_NOT_DELETED',
          message: 'Nenhum pedido foi deletado',
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

  queryBuilder(): SelectQueryBuilder<OrderEntity> {
    return this.repository.createQueryBuilder('order');
  }
}
