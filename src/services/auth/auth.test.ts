import { AuthService } from './index';
import { Credentials } from './types';

let authService: AuthService;

const credentials: Record<'valid' | 'invalid', Credentials> = {
  valid: {
    username: 'string',
    password: 'string',
  },
  invalid: {
    username: 'hello',
    password: 'world',
  },
};

beforeEach(async () => {
  authService = new AuthService();
  await authService.signOut();
});

describe('Auth Service', () => {
  it('should sign in with valid credentials', async done => {
    authService.isUserLoggedIn$.subscribe(is => is && done());
    await authService.signIn(credentials.valid);
  }, 10000);

  it('should fail on invalid credentials', async done => {
    try {
      await authService.signIn(credentials.invalid);
    } catch {
      done();
    }
  }, 10000);
});
