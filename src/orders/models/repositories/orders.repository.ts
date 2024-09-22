import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderEntity } from "../entities/orders.entity";
import { Repository, SelectQueryBuilder } from "typeorm";
import { CreateOrderDto } from "../dtos/create-order.dto";
import { FindOrderDto } from "../dtos/find-order.dto";

@Injectable()

export class OrderRepository{
    constructor(
        @InjectRepository(OrderEntity)
        private readonly repository: Repository<OrderEntity>
    ){}

    async create(orderDto: CreateOrderDto): Promise<boolean>{
        const result = await this.repository.save(orderDto)
        return !!result
    }

    async find(findOrderDto: FindOrderDto): Promise<FindOrderDto[]>{
        const orders = await this.repository.find()
        return orders
    }

    queryBuilder(): SelectQueryBuilder<OrderEntity> {
        return this.repository.createQueryBuilder('order');
      }
}