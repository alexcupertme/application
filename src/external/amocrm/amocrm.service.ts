import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AmoCRMWrapperService {
  public async getUserInfo(id: string, count: number) {
    return faker.helpers.multiple(
      () => ({
        id,
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
        job: faker.person.jobTitle(),
      }),
      { count },
    );
  }
}
