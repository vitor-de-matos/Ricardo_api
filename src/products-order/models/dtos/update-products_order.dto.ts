import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdateProductOrderDto {
  @ApiProperty({ description: 'Atualizar ID do Pedido', required: false })
  @IsOptional()
  @IsNumber()
  pedidoId?: number;

  @ApiProperty({ description: 'Atualizar ID do Produto', required: false })
  @IsOptional()
  @IsNumber()
  produtoId?: number;

  @ApiProperty({
    description: 'Atualizar quantidade do Produto',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  quantidade?: number;

  @ApiProperty({
    description: 'Atualizar preço total do pedido',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  precoTotal?: number;
}
