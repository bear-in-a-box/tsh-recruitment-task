import React, { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export const useObservable = <T>(
  observable$: Observable<T>,
  initialValue?: T
) => {
  const [value, setValue] = useState<T>(initialValue!);

  useEffect(() => {
    const subscription = observable$.subscribe(setValue);
    return () => {
      if (subscription != null && !subscription.closed) {
        subscription.unsubscribe();
      }
    };
  }, [observable$]);

  return value;
};
