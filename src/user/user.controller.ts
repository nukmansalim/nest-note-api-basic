import { Body, Controller, Delete, Get, Patch, Post, ValidationPipe, Param } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    getUsers() {
        return this.userService.findAllUsers()
    }
    @Get(":id")
    getSingleUser() {
        return this.userService.findSingleUser()
    }
    @Post()
    createUser(@Body(new ValidationPipe()) dto: createUserDto) {
        return this.userService.createUser(dto)
    }
    @Patch(":id")
    updateUser(@Param() id: string, @Body() dto: createUserDto) {
        return this.userService.updateUser(id, dto)
    }
    @Delete(":id")
    deleteUser() {
        return
    }
}
