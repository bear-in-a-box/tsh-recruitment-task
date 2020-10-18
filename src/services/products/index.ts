import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  catchError,
  debounceTime,
  exhaustMap,
  filter,
  retry,
  startWith,
  shareReplay,
} from 'rxjs/operators';

import authService from '../auth';
import { Products, ProductsQuery } from './types';

class ProductsService {
  public readonly initialFilters: ProductsQuery = Object.freeze({
    search: '',
    active: false,
    promo: false,
    limit: 10,
    page: 1,
  });

  private readonly filters$ = new BehaviorSubject<ProductsQuery>(
    this.initialFilters
  );

  public readonly products$ = combineLatest([
    authService.userToken$,
    this.filters$,
  ]).pipe(
    debounceTime(300),
    filter(([token]) => token != null),
    exhaustMap(([token, filters]) =>
      ajax
        .getJSON<Products>(this.getEndpointForFilters(filters), {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token ?? undefined,
        })
        .pipe(startWith(null))
    ),
    retry(5),
    catchError(error => {
      console.error(error);
      return of(new Error('Unable to obtain products.'));
    }),
    shareReplay({
      bufferSize: 1,
      refCount: true,
    })
  );

  private getEndpointForFilters(filters: ProductsQuery) {
    const base = 'https://join-tsh-api-staging.herokuapp.com/product';
    const queries = Object.entries(filters)
      .filter(([, value]) => Boolean(value))
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    return `${base}?${queries}`;
  }

  public updateFilters(filters: Partial<ProductsQuery>) {
    this.filters$.next({ ...this.filters$.value, ...filters });
  }
}

export default new ProductsService();
export const ProductsTestService = ProductsService;
