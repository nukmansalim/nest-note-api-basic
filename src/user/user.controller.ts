import { Body, Controller, Delete, Get, Patch, Post, ValidationPipe, Param } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    getUsers() {
        return this.userService.findAllUsers()
    }
    @Get(":id")
    getSingleUser(@Param() id: string) {
        return this.userService.findSingleUser(id)
    }
    @Post()
    createUser(@Body(new ValidationPipe()) dto: createUserDto) {
        return this.userService.createUser(dto)
    }
    @Patch(":id")
    updateUser(@Param("id") id: any, @Body() dto: updateUserDto) {
        return this.userService.updateUser(id, dto)
    }
    @Delete(":id")
    deleteUser(@Param("id") id: string) {
        return this.userService.deleteUser(id)
    }
}
