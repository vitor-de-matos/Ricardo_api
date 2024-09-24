import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './models/entities/product.entity';
import { CreateProductController } from './use-cases/create-product/create-product.controller';
import { CreateProductUseCase } from './use-cases/create-product/create-product.use-case';
import { ProductRepository } from './models/repositories/product.repository';
import { DeleteProductController } from './use-cases/delete-product/delete-product.controller';
import { DeleteProductUseCase } from './use-cases/delete-product/delete-product.use-case';
import { FindProductController } from './use-cases/find-product/find-product.controller';
import { FindProductUseCase } from './use-cases/find-product/find-product.use-case';
import { UpdateProductController } from './use-cases/update-product/update-product.controller';
import { UpdateProductUseCase } from './use-cases/update-product/update-product.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [
    CreateProductController,
    FindProductController,
    DeleteProductController,
    UpdateProductController,
  ],
  providers: [
    CreateProductUseCase,
    FindProductUseCase,
    DeleteProductUseCase,
    UpdateProductUseCase,
    { provide: ProductRepository, useClass: ProductRepository },
  ],
  exports: [ProductRepository],
})
export class ProductModule {}
