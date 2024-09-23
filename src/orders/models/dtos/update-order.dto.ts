import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty({ description: 'Atualizar status do pedido', required: false })
  @IsOptional()
  @IsString()
  status: string;

  @ApiProperty({
    description: 'Atualizar ID do usuário associado ao pedido',
    required: false,
  })
  @IsOptional()
  userId: number;
}
