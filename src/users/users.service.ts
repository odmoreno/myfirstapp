import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'Oscar moreno',
            phone: '1234123412'
        },
        {
            id: 2,
            name: 'daniel moreno',
            phone: '1234123412'
        }
    ]

    getUsers() {
        return this.users
    }
}
