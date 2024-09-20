import { Inject, Injectable } from '@nestjs/common';
import { FindUserDto, UserDto } from 'src/users/models/dtos/find-users.dto';
import { UsersRepository } from 'src/users/models/repositories/users.repository';

@Injectable()
export class FindUserUseCase {
  constructor(
    @Inject(UsersRepository)
    private readonly userRepository: UsersRepository,
  ) {}

  async find(userDto: FindUserDto): Promise<UserDto[]> {
    const { id } = userDto;

    const queryBuilder = this.userRepository
      .queryBuilder()
      .select([
        'user.id AS "User_id"',
        'user.name AS "User_name"',
        'user.role AS "User_role"',
        'user.email AS "User_email"',
      ]);

    if (id) {
      queryBuilder.andWhere('user.id = :id', { id });
    }
    const users = await queryBuilder.getRawMany();

    return users;
  }
}
