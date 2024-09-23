import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './models/entities/orders.entity';
import { CreateOrderController } from './use-cases/create-order/create-order.controller';
import { CreateOrderUseCase } from './use-cases/create-order/create-order.use-case';
import { OrderRepository } from './models/repositories/orders.repository';
import { FindOrderController } from './use-cases/find-order/find-order.controller';
import { FindOrderUseCase } from './use-cases/find-order/find-order.use-case';
import { DeleteOrderController } from './use-cases/delete-order/delete-order.controller';
import { DeleteOrderUseCase } from './use-cases/delete-order/delete-order.use-case';
import { UpdateOrderController } from './use-cases/update-order/update-order.controller';
import { UpdateOrderUseCase } from './use-cases/update-order/update-order.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  controllers: [
    CreateOrderController,
    FindOrderController,
    DeleteOrderController,
    UpdateOrderController,
  ],
  providers: [
    CreateOrderUseCase,
    FindOrderUseCase,
    DeleteOrderUseCase,
    UpdateOrderUseCase,
    { provide: OrderRepository, useClass: OrderRepository },
  ],
  exports: [OrderRepository],
})
export class orderModule {}
