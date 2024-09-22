import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ description: 'Status do pedido', required: true })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ description: 'ID do usuário associado ao pedido', required: true })
  @IsNotEmpty()
  userId: number;
}
