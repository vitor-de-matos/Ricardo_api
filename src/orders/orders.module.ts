import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "./models/entities/orders.entity";
import { CreateOrderController } from "./use-cases/create-order/create-order.controller";
import { CreateOrderUseCase } from "./use-cases/create-order/create-order.use-case";
import { OrderRepository } from "./models/repositories/orders.repository";
import { FindOrderController } from "./use-cases/find-order/find-order.controller";
import { FindOrderUseCase } from "./use-cases/find-order/find-order.use-case";

@Module({
    imports:[TypeOrmModule.forFeature([OrderEntity])],
    controllers: [
        CreateOrderController,
        FindOrderController
    ],
    providers:[CreateOrderUseCase,FindOrderUseCase,{provide: OrderRepository, useClass: OrderRepository}],
    exports:[OrderRepository]
})
export class orderModule{}