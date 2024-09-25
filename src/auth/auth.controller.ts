import { Controller, Post, Body, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './models/dtos/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Logar' })
  @Post('login')
  async login(@Body() userDto: LoginDto) {
    const user = await this.authService.validateUser(
      userDto.email,
      userDto.password,
    );
    return this.authService.login(user);
  }
}
