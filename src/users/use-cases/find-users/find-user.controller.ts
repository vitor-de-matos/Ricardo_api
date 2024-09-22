import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindUserDto, UserDto } from 'src/users/models/dtos/find-users.dto';
import { FindUserUseCase } from './find-user.use-case';

@ApiTags('Usuario')
@Controller('user')
export class FindUserController {
  constructor(
    @Inject(FindUserUseCase)
    private readonly userService: FindUserUseCase,
  ) {}

  @ApiOperation({ summary: 'Buscar usuario' })
  @ApiOkResponse({ type: FindUserDto })
  @Get('find')
  async find(@Query() userDto: FindUserDto): Promise<UserDto[]> {
    return await this.userService.find(userDto);
  }
}
