import { Module } from '@nestjs/common';
import { CraeteUsersController } from './use-cases/create-users/create-user.controller';
import { CreateUsersUseCase } from './use-cases/create-users/create-user.use-case';
import { UsersRepository } from './models/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleteUsersController } from './use-cases/delete-users/delete-user.controller';
import { DeleteUsersUseCase } from './use-cases/delete-users/delete-user.use-case';
import { FindUserUseCase } from './use-cases/find-users/find-user.use-case';
import { FindUserController } from './use-cases/find-users/find-user.controller';
import { UserInterface } from './models/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserInterface])],
  controllers: [
    CraeteUsersController,
    DeleteUsersController,
    FindUserController,
  ],
  providers: [
    CreateUsersUseCase,
    DeleteUsersUseCase,
    FindUserUseCase,
    { provide: UsersRepository, useClass: UsersRepository },
  ],
  exports: [],
})
export class usersModule {}
