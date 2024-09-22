import { Inject, Injectable } from "@nestjs/common";
import { CreateOrderDto } from "src/orders/models/dtos/create-order.dto";
import { OrderRepository } from "src/orders/models/repositories/orders.repository";

@Injectable()
export class CreateOrderUseCase{
    constructor(
        @Inject(OrderRepository)
        private readonly orderRepository: OrderRepository
    ){}

    async create(orderDto: CreateOrderDto): Promise<boolean>{
        await this.orderRepository.create(orderDto)
        return true
    }
}