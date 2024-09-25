import { CreateProductController } from './use-cases/create-product/create-product.controller';
import { DeleteProductController } from './use-cases/delete-product/delete-product.controller';
import { UpdateProductController } from './use-cases/update-product/update-product.controller';
import { FindProductController } from './use-cases/find-product/find-product.controller';
import { UpdateProductUseCase } from './use-cases/update-product/update-product.use-case';
import { CreateProductUseCase } from './use-cases/create-product/create-product.use-case';
import { DeleteProductUseCase } from './use-cases/delete-product/delete-product.use-case';
import { FindProductUseCase } from './use-cases/find-product/find-product.use-case';
import { ProductRepository } from './models/repositories/product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './models/entities/product.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [
    CreateProductController,
    FindProductController,
    UpdateProductController,
    DeleteProductController,
  ],
  providers: [
    CreateProductUseCase,
    FindProductUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
    { provide: ProductRepository, useClass: ProductRepository },
  ],
  exports: [ProductRepository],
})
export class ProductModule {}
