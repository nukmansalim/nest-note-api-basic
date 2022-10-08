import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    getUsers() {
        return
    }
    @Get()
    getSingleUser() {
        return
    }
    @Post()
    createUser() {
        return
    }
    @Patch()
    updateUser() {
        return
    }
    @Delete()
    deleteUser() {
        return
    }
}
