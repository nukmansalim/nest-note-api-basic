import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDto } from './dto/create-user.dto';
import * as bcrypt from "bcrypt"
import { User, UserDocument } from './schemas/user.schema';
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name)
    private userModel: Model<UserDocument>) { }

    async findAllUsers() {
        return this.userModel.find().select("-password").exec()
    }

    async findSingleUser() {
        return this.userModel.findOne().select("-password").exec()
    }

    async createUser(body: createUserDto) {

        const { name, password, email } = body
        const hash = await bcrypt.hash(password, 10)
        const createdUser = await this.userModel.create({
            name, password: hash, email, product: []
        })
        console.log(createdUser)
    }
}
