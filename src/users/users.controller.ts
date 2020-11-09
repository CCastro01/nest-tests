import { Controller, Get, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    async getAll(): Promise<User[]>{
        return this.usersService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<User>{
        return this.usersService.getById(id)
    }

    
}
