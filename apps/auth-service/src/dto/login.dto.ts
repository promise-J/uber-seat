import { IsEmail, IsString } from "class-validator";


export class LoginDto {
    @IsEmail()
    email: string;

    @IsString({message: 'Password is required'})
    password: string;
}