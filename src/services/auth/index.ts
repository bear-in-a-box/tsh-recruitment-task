import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Credentials, SignInResponse } from './types';

class AuthService {
  public readonly userToken$ = new BehaviorSubject<string | null>(
    this.hydrateToken()
  );

  public get userTokenSync() {
    return this.userToken$.getValue();
  }

  public readonly isUserLoggedIn$ = this.userToken$.pipe(
    map(token => token != null)
  );

  public get isUserLoggedInSync() {
    return this.userToken$.getValue() != null;
  }

  private hydrateToken(): string | null {
    return localStorage.getItem('auth-token');
  }

  private updateToken(token?: string) {
    if (token == null) {
      localStorage.removeItem('auth-token');
      this.userToken$.next(null);
    } else {
      localStorage.setItem('auth-token', token);
      this.userToken$.next(token);
    }
  }

  public async signIn({ username, password }: Credentials) {
    const request = await fetch(
      'https://join-tsh-api-staging.herokuapp.com/auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      }
    );
    const { access_token: accessToken }: SignInResponse = await request.json();
    if (accessToken == null) {
      throw new Error('Unable to sign in.');
    } else {
      this.updateToken(accessToken);
    }
  }

  public async signOut() {
    this.updateToken();
  }
}

export default new AuthService();
export { AuthService };
