import { Module } from '@nestjs/common';
import { CreateProductOrderController } from './use-cases/create-product_order/create-product_order.controller';
import { CreateProductOrderUseCase } from './use-cases/create-product_order/create-product_order.use-case';
import { FindProductOrderController } from './use-cases/find-product_order/find-product_order.controller';
import { FindProductOrderUseCase } from './use-cases/find-product_order/find-product_order.use-case';
import { DeleteProductOrderController } from './use-cases/delete-product_order/delete-product_order.controller';
import { DeleteProductOrderUseCase } from './use-cases/delete-product_order/delete-product_order.use-case';
import { UpdateProductOrderController } from './use-cases/update-product_order/update-product_order.controller';
import { UpdateProductOrderUseCase } from './use-cases/update-product_order/update-product_order.use-case';
import { ProductOrderRepository } from './models/repositories/product-order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrderEntity } from './models/entities/products-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrderEntity])],
  controllers: [
    CreateProductOrderController,
    FindProductOrderController,
    DeleteProductOrderController,
    UpdateProductOrderController,
  ],
  providers: [
    CreateProductOrderUseCase,
    FindProductOrderUseCase,
    DeleteProductOrderUseCase,
    UpdateProductOrderUseCase,
    { provide: ProductOrderRepository, useClass: ProductOrderRepository },
  ],
  exports: [ProductOrderRepository],
})
export class ProductOrderModule {}
