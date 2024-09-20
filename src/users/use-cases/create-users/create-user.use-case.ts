import { Inject, Injectable } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/models/dtos/create-users.dto';
import { UsersRepository } from 'src/users/models/repositories/users.repository';

@Injectable()
export class CreateUsersUseCase {
  constructor(
    @Inject(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(userDto: CreateUsersDto): Promise<boolean> {
    return await this.usersRepository.create(userDto);
  }
}
