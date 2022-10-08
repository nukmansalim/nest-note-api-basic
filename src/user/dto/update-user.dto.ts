import { Types } from "mongoose"

export class UpdateUserDto {
    readonly name: string
    readonly password: string
    readonly email: string
    readonly products: [Types.ObjectId]
}