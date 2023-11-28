import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { User } from 'src/api/entities/user.entity';
@Injectable()
export class AmoCRMWrapperService {
  public async getUserInfo(id: string, count: number): Promise<User[]> {
    return faker.helpers.multiple(
      () => ({
        id,
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
        job: faker.person.jobTitle(),
      }),
      {
        count: {
          max: count,
          min: count,
        },
      },
    );
  }
}
