import { Controller, Body, Post, UseGuards, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { Response } from 'express';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post("login")
    @HttpCode(HttpStatus.OK)
    async login(@Body() dto: loginDto, @Res({ passthrough: true }) res: Response) {
        const user = await this.authService.login(dto.email, dto.password)
        if (user) res.cookie("Refresh_Token", user.Refresh_Token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 60 * 1000
        })
        return user.Access_Token
    }
} 
