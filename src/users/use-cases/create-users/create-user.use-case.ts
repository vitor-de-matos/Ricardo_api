import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/models/dtos/create-users.dto';
import { UsersRepository } from 'src/users/models/repositories/users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUsersUseCase {
  constructor(
    @Inject(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(userDto: CreateUsersDto): Promise<boolean> {
    const existingUser = await this.usersRepository.findByEmail(userDto.email);
    if (existingUser) {
      throw new ConflictException('Email já está em uso');
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 10);

    // Criar o usuário no repositório
    const userData = { ...userDto, password: hashedPassword };
    await this.usersRepository.create(userData);
    return true;
  }
}
