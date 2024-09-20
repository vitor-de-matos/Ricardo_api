import {
  Controller,
  Delete,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteUsersUseCase } from './delete-user.use-case';

@ApiTags('Usuario')
@Controller('user')
export class DeleteUsersController {
  constructor(
    @Inject(DeleteUsersUseCase)
    private readonly usersService: DeleteUsersUseCase,
  ) {}

  @ApiOperation({ summary: 'Remover Usuario' })
  @ApiOkResponse({ description: 'Usuario removido com sucesso' })
  @Delete(':userId/delete')
  async delete(@Param('userId', ParseIntPipe) userId: number): Promise<string> {
    await this.usersService.delete(userId);
    return 'Usuario deletado com sucesso';
  }
}
