import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Nome da categoria', required: true })
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  @IsString()
  @MaxLength(100)
  nome: string;
}
