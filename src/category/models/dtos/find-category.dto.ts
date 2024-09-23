import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class FindCategoryDto {
  @ApiProperty({ description: 'Buscar pelo ID da categoria', required: false })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Buscar pelo nome da categoria',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  nome?: string;
}

export class CategoryDto {
  @ApiProperty({ description: 'ID categoria', required: true })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Nome da categoria', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  nome: string;
}
