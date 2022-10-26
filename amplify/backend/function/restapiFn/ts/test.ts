import { ulid } from 'ulid'
import { AccountModel } from './one-table';

(async () => {
  await AccountModel.create({
    id: ulid(),
    name: 'Acme Airplanes',
    zip: '1234ab'
  });
})()
