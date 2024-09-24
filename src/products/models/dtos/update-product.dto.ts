import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ description: 'Atualziar nome do produto', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  nome?: string;

  @ApiProperty({ description: 'Atualziar preço do produto', required: false })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  preco?: number;

  @ApiProperty({ description: 'Atualziar ID da categoria', required: false })
  @IsOptional()
  @IsNumber()
  categoriaId?: number;
}
