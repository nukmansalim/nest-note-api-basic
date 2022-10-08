import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    getUsers() {
        return
    }
    @Get(":id")
    getSingleUser() {
        return
    }
    @Post()
    createUser(@Body() body: createUserDto) {
        return this.userService.createUser(body)
    }
    @Patch(":id")
    updateUser() {
        return
    }
    @Delete(":id")
    deleteUser() {
        return
    }
}
