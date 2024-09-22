import { Inject, Injectable } from "@nestjs/common";
import { FindOrderDto, OrderDto } from "src/orders/models/dtos/find-order.dto";
import { OrderRepository } from "src/orders/models/repositories/orders.repository";

@Injectable()
export class FindOrderUseCase{
    constructor(
        @Inject(OrderRepository)
        private readonly orderRepository: OrderRepository
    ){}

    async find(orderDto: FindOrderDto):Promise<OrderDto[]>{
        const {id} = orderDto
    
    const queryBuilder = this.orderRepository.queryBuilder().select([
        'order.id AS "Order_id"',
        'order.status AS "Order_status"',

        'user.name AS "User_name"'
    ]).leftJoin('order.user','user')
if(id){
    queryBuilder.andWhere('order.id = :id',{id})
}    
const order = await queryBuilder.getRawMany(

    
)
return order
}
}