import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class CreateProductOrderDto {
  @ApiProperty({ description: 'ID do Pedido', required: true })
  @IsNotEmpty({ message: 'Id do pedido não pode estar vazio' })
  @IsNumber()
  pedidoId: number;

  @ApiProperty({ description: 'ID do Produto', required: true })
  @IsNotEmpty({ message: 'Id do produto não pode estar vazio' })
  @IsNumber()
  produtoId: number;

  @ApiProperty({ description: 'Quantidade do Produto', required: true })
  @IsNotEmpty({ message: 'Quantidade do produto não pode estar vazia' })
  @IsNumber()
  @IsPositive()
  quantidade: number;

  @ApiProperty({
    description:
      'Preço total do pedido, baseado na quantidade e preço unitário do produto',
    required: false,
    readOnly: true,
  })
  @IsOptional()
  @IsDecimal()
  precoTotal?: number;
}
