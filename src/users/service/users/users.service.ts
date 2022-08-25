import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User,serializedUser } from '../../type/users';

@Injectable()
export class UsersService {
    private users:User[]=[
        {
            username:"Aakkif",
            Password:"Akkif9115"
        },
        {
            username:"gobi",
            Password:"g9115"
        },
        {
            username:"Amal",
            Password:"A9115"
        },
    ];
    getUsers(){
        return this.users.map((users)=> plainToClass(serializedUser,users));
    };
    getUserByuserName(username:string){
        return this.users.find((users)=>users.username === username);
    }
}
