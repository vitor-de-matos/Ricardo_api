import {
  Body,
  Controller,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUserUseCase } from './update-user.use-case';
import { UpdateUserDto } from 'src/users/models/dtos/update-users.dto';

@ApiTags('Usuario')
@Controller('user')
export class UpdateUserController {
  constructor(
    @Inject(UpdateUserUseCase)
    private readonly updateUserService: UpdateUserUseCase,
  ) {}

  @ApiOperation({ summary: 'Modificar usuario' })
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateUserDto,
  ): Promise<string> {
    await this.updateUserService.update(id, updateDto);
    return 'Usuario atualizada com sucesso';
  }
}
