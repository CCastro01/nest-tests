import { Injectable } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    users: CreateUserDto[] = [
        {id: 1, name: "user1", email: "user1@dellead.com", password: 'senha1'},
        {id: 2, name: "user2", email: "user2@dellead.com", password: 'senha2'},
        {id: 3, name: "user3", email: "user3@dellead.com", password: 'senha3'}
    ]

    getAll(){
        return this.users
    }

    getbyId(id: number){

    }

    create(user: CreateUserDto){

    }

    update(user: UpdateUserDto){

    }

    delete(id: number){

    }
}
