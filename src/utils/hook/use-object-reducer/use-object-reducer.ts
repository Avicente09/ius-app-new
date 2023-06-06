import type { Reducer } from 'react';
import { useReducer } from 'react';

import type { SetterAction } from './use-object-reducer.types';

function objectReducer<T>(state: T, action: SetterAction<T>): T {
  if (action === 'clear') {
    return {} as T;
  } else if ((action as { reset: T })?.reset) {
    return (action as { reset: T }).reset;
  } else {
    return {
      ...state,
      ...action,
    };
  }
}

export function useObjectReducer<T>(initialValue: T) {
  return useReducer<Reducer<T, SetterAction<T>>>(objectReducer, initialValue);
}
