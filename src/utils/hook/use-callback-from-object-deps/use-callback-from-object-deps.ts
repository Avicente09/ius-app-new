import { fromObject } from '@utils/array/from-object';
import { useCallback } from 'react';

import type { CallbackType } from './use-callback-from-object-deps.types';

export function useCallbackFromObjectDeps<
  TResult,
  TDeps,
  TParams extends any[]
>(
  callback: CallbackType<TResult, TParams>,
  deps: TDeps
): CallbackType<TResult, TParams> {
  const depsAsArray = deps ? fromObject(deps) : [];

  // Intentionally ignore the lint rule in order to wrap the callback
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(callback, [...depsAsArray]);
}
