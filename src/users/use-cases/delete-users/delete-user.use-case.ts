import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/models/dtos/create-users.dto';
import { UsersRepository } from 'src/users/models/repositories/users.repository';

@Injectable()
export class DeleteUsersUseCase {
  constructor(
    @Inject(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  async delete(userId: number): Promise<void> {
    const userExists = await this.usersRepository.find({
      id: userId,
    });
    if (userExists == null) {
      throw new NotFoundException({
        code: 'USER_NOT_FOUND',
        message: 'Usuario não encontrado',
      });
    }
    await this.usersRepository.delete(userId);
  }
}
