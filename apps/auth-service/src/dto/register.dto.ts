import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @IsEmail()
    email: string;

    @IsString({message: 'Password is required'})
    @MinLength(8, {message: 'Password must be atleast 8 characters'})
    password: string;
}