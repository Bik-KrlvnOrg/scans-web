import { User } from "src/_proto/user";
import { IsString } from 'class-validator'
export class UserDto implements User {
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}