import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserRole } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  @ApiProperty({ description: 'Email do Usuario', required: false })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email?: string;

  @ApiProperty({ description: 'Senha do Usuario', required: false })
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password?: string;

  @ApiProperty({
    required: false,
    enum: UserRole,
    nullable: true,
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
