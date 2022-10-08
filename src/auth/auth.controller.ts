import { Controller, Get, Body, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post()
    @UseGuards(LocalAuthGuard)
    validateUser(@Body() dto: loginDto) {
        return this.authService.validateUser(dto.email, dto.password)
    }
}
