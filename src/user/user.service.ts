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

    async findAllUsers(): Promise<User[]> {
        return this.userModel.find()
    }

    async findSingleUser(id: any): Promise<User> {
        return this.userModel.findOne(id).select("-password").exec()
    }

    async createUser(body: createUserDto) {
        try {

            const { name, password, email } = body
            const hash = await bcrypt.hash(password, 10)
            const createdUser = await this.userModel.create({
                name, password: hash, email
            })
            return this.buildUser(createdUser)
        } catch (err) {
            if (err.code === 11000) throw new HttpException("user is already exists", 400)
        }
    }
    async updateUser(id: any, dto: createUserDto) {
        try {

            const updatedUser = await this.userModel.updateOne(id, {
                ...dto
            })

            const modifiedUser = await this.userModel.findOne(id)

            if (updatedUser) return this.buildUser(modifiedUser)
        } catch (err) {
            console.log(err)
        }
    }

    async deleteUser(id: any) {
        const deleted = await this.userModel.deleteOne({ id })

        return { message: "User succesfully deleted" }
    }

    private buildUser(user: User) {
        const userObj = {
            name: user.name,
            email: user.email,
            products: user.products
        }
        return { user: userObj }
    }
}
