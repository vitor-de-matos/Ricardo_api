import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateProductOrderDto {
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
