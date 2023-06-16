import { fromObject } from '@utils/array/from-object';
import { useMemo } from 'react';

export function useMemoFromObjectDeps<TValue, TDeps>(
  callback: () => TValue,
  deps: TDeps
): TValue {
  const depsAsArray = deps ? fromObject(deps) : [];

  // Intentionally ignore the lint rule in order to wrap the callback in a useMemo
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(callback, [...depsAsArray]);
}
