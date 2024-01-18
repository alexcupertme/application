import { Injectable } from '@nestjs/common';
import { User } from 'src/api/entities/user.entity';
import { AmoCRMWrapperService } from 'src/external/amocrm';

@Injectable()
export class UsersService {
  constructor(private readonly amoCRMWrapperService: AmoCRMWrapperService) { }

  async getUser(id: string) {
    const user = await this.amoCRMWrapperService.getUserInfo(id, 1);
    return user;
  }

  async getUsers(count: number, ageSort: boolean, alphabet: boolean) {
    const promises = [];
    for (let id = 0; id <= count; id += 1) {
      promises.push(this.amoCRMWrapperService.getUserInfo(String(id), count));
    }

    const users: User[] = await Promise.all(promises);
    if (alphabet === true) {
      // const arrNamesOfUsers = users.map((user: User) => user.name);
      // arrNamesOfUsers.sort();
      // arrNamesOfUsers.map(
      //   (userName, index) =>
      //     (users[index] = users.filter((user: User) => (user.name = userName))),
      // );
      // users.sort((user1, user2) => user2.name > user1.name);                         --> delete
    }
    if (ageSort === true) {
      function toSortedAge(user1: User, user2: User) {
        return user1.age - user2.age;
      }
      users.sort(toSortedAge);
    }

    return users;
  }
}
