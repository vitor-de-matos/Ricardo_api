import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Nome do produto', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  nome: string;

  @ApiProperty({ description: 'Preço do produto', required: true })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  preco: number;

  @ApiProperty({ description: 'ID da categoria', required: true })
  @IsNotEmpty()
  @IsNumber()
  categoriaId: number;
}
