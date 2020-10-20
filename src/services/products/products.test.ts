import { AuthService } from '../auth';
import { Credentials } from '../auth/types';
import { ProductsService } from './index';

const authService = new AuthService();
const productsService = new ProductsService(authService);

const credentials: Credentials = {
  username: 'string',
  password: 'string',
};

beforeAll(async () => {
  await authService.signIn(credentials);
});

describe('Products Service', () => {
  it('should have some initially fetched products', done => {
    productsService.products$.subscribe(value => {
      if (value != null && !(value instanceof Error)) {
        done();
      }
    });
  }, 5000);
});
