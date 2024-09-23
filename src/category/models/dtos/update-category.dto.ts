import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'Atualizar nome da categoria',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  nome?: string;
}
