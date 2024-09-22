import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateOrderUseCase } from "./create-order.use-case";
import { OrderDto } from "src/orders/models/dtos/find-order.dto";
import { CreateOrderDto } from "src/orders/models/dtos/create-order.dto";

@ApiTags('Pedido')
@Controller('order')
export class CreateOrderController{
    constructor(
        @Inject(CreateOrderUseCase)
        private readonly orderService: CreateOrderUseCase
    ){}

    @ApiOperation({summary: 'Adicionar pedido'})
    @Post('create')
    async create(@Body() orderDto:CreateOrderDto): Promise<string>{
        await this.orderService.create(orderDto)
        return 'deu boa'
    }
}