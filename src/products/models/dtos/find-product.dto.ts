import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class FindProductDto {
  @ApiProperty({ description: 'Buscar pelo ID do produto', required: false })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({ description: 'Buscar pelo nome do produto', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  nome?: string;

  @ApiProperty({ description: 'Buscar pelo preço do produto', required: false })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  preco?: number;

  @ApiProperty({ description: 'Buscar pelo ID da categoria', required: false })
  @IsOptional()
  @IsNumber()
  categoriaId?: number;
}

export class ProductDto {
  @ApiProperty({ description: 'ID do produto', required: true })
  @IsNotEmpty()
  @IsNumber()
  id: number;

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
