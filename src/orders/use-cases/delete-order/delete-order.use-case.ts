import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { OrderRepository } from 'src/orders/models/repositories/orders.repository';

@Injectable()
export class DeleteOrderUseCase {
  constructor(
    @Inject(OrderRepository) private readonly orderRespository: OrderRepository,
  ) {}

  async delete(orderId: number): Promise<void> {
    const orderExists = await this.orderRespository.findById(orderId);
    if (!orderExists) {
      throw new NotFoundException();
    }
    await this.orderRespository.delete(orderId);
  }
}
