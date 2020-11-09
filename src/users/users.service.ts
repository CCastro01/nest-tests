import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './user.entity'

@Injectable()
export class UsersService {


    users: User[] = [
        {id: 1, name: "user1", email: "user1@dellead.com", password: 'senha1'},
        {id: 2, name: "user2", email: "user2@dellead.com", password: 'senha2'},
        {id: 3, name: "user3", email: "user3@dellead.com", password: 'senha3'}
    ]

    getAll(){
        return this.users
    }

    getById(id: number){
        const user = this.users.find((value) => value.id == id)
        return user
    }

    create(user: User){
        let lastId = 0
        if(this.users.length > 0){
            lastId = this.users[this.users.length - 1].id
        }
        user.id = lastId + 1
        this.users.push(user)
        return user
    }

    update(user: User){
        const userArray = this.getById(user.id)
        if(userArray){
            userArray.id = user.id
            userArray.email = user.email
            userArray.name = user.name
            userArray.password = user.password
            userArray.profilePicture = user.profilePicture
        }
        return userArray
    }

    delete(id: number){
        const index = this.users.findIndex((value) => value.id == id)
        this.users.splice(index, 1)
    }
}
