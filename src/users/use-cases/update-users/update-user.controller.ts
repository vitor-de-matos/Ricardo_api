import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/users/models/dtos/update-users.dto';
import { UpdateUserUseCase } from './update-user.use-case';
import {
  ParseIntPipe,
  Controller,
  Inject,
  Param,
  Patch,
  Body,
} from '@nestjs/common';

@ApiTags('Usuario')
@Controller('user')
export class UpdateUserController {
  constructor(
    @Inject(UpdateUserUseCase)
    private readonly updateUserService: UpdateUserUseCase,
  ) {}

  @ApiOperation({ summary: 'Modificar usuario' })
  @ApiOkResponse({ description: 'Usuario atualizado com sucesso' })
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateUserDto,
  ): Promise<string> {
    await this.updateUserService.update(id, updateDto);
    return 'Usuario atualizado com sucesso';
  }
}
