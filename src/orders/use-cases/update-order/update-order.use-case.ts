import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateOrderDto } from 'src/orders/models/dtos/update-order.dto';
import { OrderRepository } from 'src/orders/models/repositories/orders.repository';

@Injectable()
export class UpdateOrderUseCase {
  constructor(
    @Inject(OrderRepository)
    private readonly orderRepository: OrderRepository,
  ) {}

  async update(id: number, orderDto: UpdateOrderDto): Promise<void> {
    const orderExists = await this.orderRepository.findById(id);
    if (!orderExists) {
      throw new NotFoundException();
    }

    try {
      await this.orderRepository.update(id, orderDto);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
