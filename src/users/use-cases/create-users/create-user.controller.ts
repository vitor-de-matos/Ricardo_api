import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUsersUseCase } from './create-user.use-case';
import { CreateUsersDto } from 'src/users/models/dtos/create-users.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@ApiTags('Usuario')
@Controller('user')
export class CraeteUsersController {
  constructor(
    @Inject(CreateUsersUseCase)
    private readonly usersService: CreateUsersUseCase,
  ) {}

  @ApiOperation({ summary: 'Adicionar observação' })
  @Post('create')
  async create(@Body() userDto: CreateUsersDto): Promise<string> {
    await this.usersService.create(userDto);
    return 'deu boa';
  }
}
