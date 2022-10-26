import { faker } from '@faker-js/faker';
import { ulid } from 'ulid'
import { AccountModel, UserModel } from './one-table';

(async () => {
  const account = await AccountModel.create({
    id: ulid(),
    name: 'Acme Airplanes',
    zip: '1234ab'
  });

  for (let i = 0; i < 1e2; i++) {
    await UserModel.create({
      id: ulid(),
      accountId: account.id,
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      role: 'user',
      balance: faker.datatype.number({ min: 0, max: 1000000 })
    });
  }
})()
