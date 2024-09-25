import { DeleteUsersController } from './use-cases/delete-users/delete-user.controller';
import { CraeteUsersController } from './use-cases/create-users/create-user.controller';
import { UpdateUserController } from './use-cases/update-users/update-user.controller';
import { DeleteUsersUseCase } from './use-cases/delete-users/delete-user.use-case';
import { CreateUsersUseCase } from './use-cases/create-users/create-user.use-case';
import { FindUserController } from './use-cases/find-users/find-user.controller';
import { UpdateUserUseCase } from './use-cases/update-users/update-user.use-case';
import { FindUserUseCase } from './use-cases/find-users/find-user.use-case';
import { UsersRepository } from './models/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/entities/user.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [
    CraeteUsersController,
    FindUserController,
    UpdateUserController,
    DeleteUsersController,
  ],
  providers: [
    CreateUsersUseCase,
    FindUserUseCase,
    UpdateUserUseCase,
    DeleteUsersUseCase,
    { provide: UsersRepository, useClass: UsersRepository },
  ],
  exports: [UsersRepository],
})
export class UsersModule {}
