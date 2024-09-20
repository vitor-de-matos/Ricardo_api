import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { UserRole } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
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
