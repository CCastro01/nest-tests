import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Post()
    async create(@Body() user: User): Promise<User>{
        return this.usersService.create(user)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: User): Promise<User>{
        user.id = id
        return this.usersService.update(user)
    }
    
    @Delete(':id')
    async delete(@Param("id") id:number){
        this.usersService.delete(id)
    }
}
