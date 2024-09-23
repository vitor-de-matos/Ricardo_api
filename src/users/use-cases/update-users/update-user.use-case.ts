import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from 'src/users/models/dtos/update-users.dto';
import { UsersRepository } from 'src/users/models/repositories/users.repository';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject(UsersRepository)
    private readonly userRepository: UsersRepository,
  ) {}

  async update(id: number, userDto: UpdateUserDto): Promise<void> {
    const userExists = await this.userRepository.findById(id);
    if (!userExists) {
      throw new NotFoundException();
    }
    try {
      await this.userRepository.update(id, userDto);
    } catch (error) {
      throw new InternalServerErrorException({
        code: 'UPDATE_FAILED',
        message: 'Falha ao atualizar dados',
      });
    }
  }
}
