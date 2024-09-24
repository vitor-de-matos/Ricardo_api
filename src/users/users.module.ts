import { Module } from '@nestjs/common';
import { CraeteUsersController } from './use-cases/create-users/create-user.controller';
import { CreateUsersUseCase } from './use-cases/create-users/create-user.use-case';
import { UsersRepository } from './models/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleteUsersController } from './use-cases/delete-users/delete-user.controller';
import { DeleteUsersUseCase } from './use-cases/delete-users/delete-user.use-case';
import { FindUserUseCase } from './use-cases/find-users/find-user.use-case';
import { FindUserController } from './use-cases/find-users/find-user.controller';
import { UserEntity } from './models/entities/user.entity';
import { UpdateUserController } from './use-cases/update-users/update-user.controller';
import { UpdateUserUseCase } from './use-cases/update-users/update-user.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [
    CraeteUsersController,
    FindUserController,
    DeleteUsersController,
    UpdateUserController,
  ],
  providers: [
    CreateUsersUseCase,
    FindUserUseCase,
    DeleteUsersUseCase,
    UpdateUserUseCase,
    { provide: UsersRepository, useClass: UsersRepository },
  ],
  exports: [UsersRepository],
})
export class UsersModule {}
