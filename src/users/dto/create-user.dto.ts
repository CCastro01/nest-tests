export class CreateUserDto{
    readonly id: number
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly profilePicture?: string
}