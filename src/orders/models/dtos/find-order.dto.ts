import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindOrderDto {
  @ApiProperty({ required: false })
  @IsOptional()
  id: number;

  @ApiProperty({ description: 'Status do pedido', required: false })
  @IsOptional()
  @IsString()
  status: string;

  @ApiProperty({
    description: 'ID do usuário associado ao pedido',
    required: false,
  })
  @IsOptional()
  userId: number;
}

export class OrderDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  userId: number;
}
