import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CreateUsersDto } from '../dtos/create-users.dto';
import { FindUserDto } from '../dtos/find-users.dto';
import { UpdateUserDto } from '../dtos/update-users.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(userDto: CreateUsersDto): Promise<boolean> {
    const result = await this.repository.save(userDto);
    return !!result;
  }

  async find(findUsersDto: FindUserDto): Promise<FindUserDto[]> {
    const users = await this.repository.find();
    return users;
  }

  async findById(id: number): Promise<UserEntity | undefined> {
    return await this.repository.findOne({ where: { id: id } });
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return await this.repository.findOne({ where: { email } });
  }

  async update(id: number, userDto: UpdateUserDto): Promise<boolean> {
    const user = await this.repository.findOne({
      where: { id: id },
    });
    const updatedUser = await this.repository.save({
      ...user,
      ...userDto,
    });
    return !!updatedUser;
  }

  async delete(userId: number): Promise<void> {
    try {
      const result = await this.repository.delete(userId);
      if (result.affected === 0) {
        throw new InternalServerErrorException({
          code: 'USER_NOT_DELETED',
          message: 'Nenhum usuario foi deletado',
        });
      }
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }
    }
  }

  queryBuilder(): SelectQueryBuilder<UserEntity> {
    return this.repository.createQueryBuilder('user');
  }
}
