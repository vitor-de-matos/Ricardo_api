import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUsersUseCase } from './create-user.use-case';
import { CreateUsersDto } from 'src/users/models/dtos/create-users.dto';

@ApiTags('Usuario')
@Controller('user')
export class CraeteUsersController {
  constructor(
    @Inject(CreateUsersUseCase)
    private readonly usersService: CreateUsersUseCase,
  ) {}

  @ApiOperation({ summary: 'Adicionar observação' })
  @ApiOkResponse({ description: 'Usuario criado com sucesso' })
  @Post('create')
  async create(@Body() userDto: CreateUsersDto): Promise<string> {
    await this.usersService.create(userDto);
    return 'Usuario criado com sucesso';
  }
}
