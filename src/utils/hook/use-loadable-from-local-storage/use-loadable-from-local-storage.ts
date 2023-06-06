import { useCallback, useEffect } from 'react';

import { useObjectReducer } from '../use-object-reducer';
import type {
  UseLoadableFromLocalStorageParams,
  UseLoadableFromLocalStorageState,
} from './use-loadable-from-local-storage.types';

export function useLoadableFromLocalStorage<TData>({
  initialData,
  key,
}: UseLoadableFromLocalStorageParams<TData>) {
  const [state, dispatch] = useObjectReducer<
    UseLoadableFromLocalStorageState<TData>
  >({
    status: 'loading',
    errors: [],
    data: initialData,
  });

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item && state.status === 'loading')
      dispatch({
        status: 'ready',
        data: JSON.parse(item) as TData,
      });
  }, [dispatch, key, state.status]);

  const clear = useCallback(() => {
    localStorage.removeItem(key);
    dispatch({
      reset: {
        status: 'ready',
        errors: [],
      },
    });
  }, [dispatch, key]);

  const set = useCallback(
    (data: TData) => {
      localStorage.setItem(key, JSON.stringify(data));
      dispatch({
        status: 'ready',
        data,
      });
    },
    [dispatch, key]
  );

  return {
    ...state,
    clear,
    set,
  };
}
