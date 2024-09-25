import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  MaxLength,
  IsString,
  IsEnum,
} from 'class-validator';

export class FindUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @Type(() => Number)
  id?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  @ApiProperty({
    required: false,
    enum: UserRole,
    nullable: true,
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

export class UserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Type(() => Number)
  id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    required: true,
    enum: UserRole,
  })
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
}

export class UserFoundDto {
  @ApiProperty({ example: 1, description: 'id do usuario' })
  User_id: number;

  @ApiProperty({ example: 'ze', description: 'nome do usuario' })
  User_name: string;

  @ApiProperty({ example: 'padeiro', description: 'função do usuario' })
  User_role: string;

  @ApiProperty({ example: 'email@123.com', description: 'email do usuario' })
  User_email: string;
}
