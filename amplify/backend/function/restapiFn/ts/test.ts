import { faker } from '@faker-js/faker';
import { ulid } from 'ulid'
import { AccountModel, UserModel } from './one-table';

async function create() {

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
}

async function query() {

  // get all users by account id
  let accountId = '01GGA9BWMKZAJRN0YEDYM0GF6S';

  let users = await UserModel.find({
    accountId
  }, {
    limit: 2
  });

  console.log('users1=', users);

  // pagination
  let users2 = await UserModel.find({
    accountId
  }, {
    next: users.next,
    limit: 2
  });

  console.log('users2=', users2);

  // fetch by email
  let userByEmail = await UserModel.find({
      email: 'Travon35@hotmail.com'
    },
    { index: 'gs1' }
  );
  console.log(userByEmail)
}


(async () => {
  query()
})()
