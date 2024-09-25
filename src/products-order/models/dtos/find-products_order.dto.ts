import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class FindProductOrderDto {
  @ApiProperty({ description: 'Buscar pelo ID ', required: false })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({ description: 'Buscar pelo ID do Pedido', required: false })
  @IsOptional()
  @IsNumber()
  pedidoId: number;

  @ApiProperty({ description: 'Buscar pelo ID do Produto', required: false })
  @IsOptional()
  @IsNumber()
  produtoId: number;
}

export class ProductOrderDto {
  @ApiProperty({ description: 'ID ', required: true })
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @ApiProperty({ description: 'ID do Pedido', required: true })
  @IsNotEmpty()
  @IsNumber()
  pedidoId: number;

  @ApiProperty({ description: 'ID do Produto', required: true })
  @IsNotEmpty()
  @IsNumber()
  produtoId: number;

  @ApiProperty({ description: 'Quantidade do Produto', required: true })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  quantidade: number;

  @ApiProperty({
    description:
      'Preço total do pedido, baseado na quantidade e preço unitário do produto',
    required: true,
  })
  @IsNotEmpty()
  @IsDecimal()
  precoTotal: number;
}
