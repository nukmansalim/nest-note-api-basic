import { Controller, Body, Post, UseGuards, HttpCode, HttpStatus, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post("login")
    @HttpCode(HttpStatus.OK)
    login(@Body() dto: loginDto) {
        return this.authService.login(dto.email, dto.password)
    }
} 
