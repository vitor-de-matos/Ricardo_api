import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsersDto {
  @ApiProperty({ description: 'Nome do Usuario', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({ description: 'Email do Usuario', required: true })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({ description: 'Senha do Usuario', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password: string;

  @ApiProperty({
    description: 'Função do usuario',
    required: true,
    enum: UserRole,
  })
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
}
