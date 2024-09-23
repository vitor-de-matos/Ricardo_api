import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Nome da categoria', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  nome: string;
}
