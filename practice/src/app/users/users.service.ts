import { User } from './user.model';

export class UsersService{
    users :User [] = [
        {
            name:'Sudhi',
            age:34
        },
        {
            name:'Rintu',
            age:31
        }
    ];

    getUsers(){
        return this.users.slice();
    }
}