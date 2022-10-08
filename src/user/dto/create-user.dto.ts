import { IsEmail, IsNotEmpty } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    password: string;

    @IsEmail()
    email: string;
}