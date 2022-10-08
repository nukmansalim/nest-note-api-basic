import { Body, Controller, Delete, Get, Patch, Post, ValidationPipe } from '@nestjs/common';
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
    createUser(@Body(new ValidationPipe()) createuserDto: createUserDto) {
        return this.userService.createUser(createuserDto)
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
