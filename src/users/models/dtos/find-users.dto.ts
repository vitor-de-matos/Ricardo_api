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
