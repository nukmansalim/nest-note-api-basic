import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';
import * as bcrypt from "bcrypt"
@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name)
    private userModel: Model<UserDocument>) { }
    async login(email: string, pass: string) {

        const user = await this.userModel.findOne({ email })
        if (user && bcrypt.compare(pass, user.password)) {
            const { name, email, products } = user
            return { user: { name, email, products } }
        }
        throw new HttpException("UNAUTHORIZED", HttpStatus.UNAUTHORIZED)
    }
}

