import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsersDto } from 'src/users/models/dtos/create-users.dto';
import { LoginDto } from './models/dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() userDto: LoginDto) {
    const user = await this.authService.validateUser(
      userDto.email,
      userDto.password,
    );
    return this.authService.login(user);
  }
}
