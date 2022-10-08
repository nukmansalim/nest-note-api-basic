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
        try {

            const { name, password, email } = body
            const hash = await bcrypt.hash(password, 10)
            const createdUser = await this.userModel.create({
                name, password: hash, email, product: []
            })
            delete createdUser.password
            return createdUser
        } catch (err) {
            if (err.code === 11000) throw new HttpException("user is already exists", 400)
        }
    }
    async updateUser(id: string, dto: createUserDto) {
        return
    }
}
