import { HttpException, HttpStatus, Injectable, Response } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';
import { jwtConstants } from 'src/constants';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"
@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name)
    private userModel: Model<UserDocument>,
        private jwtService: JwtService
    ) { }
    async login(email: string, pass: string) {

        const user = await this.userModel.findOne({ email })
        if (user && bcrypt.compare(pass, user.password)) {
            const { name, email, id } = user

            return {
                Access_Token: this.jwtService.sign({
                    user: {
                        id, name, email
                    }
                })
            }
        }
        throw new HttpException("UNAUTHORIZED", HttpStatus.UNAUTHORIZED)
    }
}

