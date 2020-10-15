import { useObservable } from 'hooks/use-observable';
import React from 'react';

import { authService, productsService } from 'services';
import { Products as Model } from 'services/products/types';

export const Products = () => {
  const products: Model | Error | null = useObservable(
    productsService.products$,
    null
  );
  if (products == null) {
    return <p>Loading</p>;
  }
  if (products instanceof Error) {
    return <p>Error: ${products.message}</p>;
  }
  if (products.items.length === 0) {
    return <p>No items</p>;
  }
  return (
    <>
      <h2>Products page</h2>
      <p>{JSON.stringify(products)}</p>
      <button onClick={() => authService.signOut()}>Logout</button>
    </>
  );
};
