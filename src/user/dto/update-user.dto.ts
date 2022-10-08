import { Types } from "mongoose"

export class updateUserDto {
    readonly name: string
    readonly password: string
    readonly email: string
    readonly products: Types.ObjectId[]
}