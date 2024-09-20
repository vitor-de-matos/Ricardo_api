import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUsersDto {
  @ApiProperty({ description: 'Nome do Usuario', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: 'Função do usuario',
    required: true,
    enum: UserRole,
  })
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
}
