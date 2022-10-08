import { Controller, Get, Body, Post, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post("login")
    // @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    login(@Body() dto: loginDto) {
        return this.authService.login(dto.email, dto.password)
    }
} 
