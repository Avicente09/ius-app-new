import type { UseCase } from '@domain/entities';
import { AppError } from '@domain/error-definition';
import { useCallback, useMemo, useReducer } from 'react';

import type {
  InvokeBusinessHook,
  InvokeBusinessHookProvider,
  InvokeBusinessHookResultState,
} from './create-invoke-business-hook.types';

export function createInvokeBusinessHook<
  TRepository,
  TInput = void,
  TOutput = TInput,
  TFactoryParams = void
>(
  useCase: UseCase<TRepository, TInput, TOutput>,
  provider: InvokeBusinessHookProvider<TRepository, TFactoryParams>
): InvokeBusinessHook<TInput, TOutput, TFactoryParams> {
  const initialState: InvokeBusinessHookResultState<TOutput> = {
    status: 'idle',
    errors: [],
  };

  const reducer = (
    state: InvokeBusinessHookResultState<TOutput>,
    payload: Partial<InvokeBusinessHookResultState<TOutput>>
  ) => {
    return { ...state, ...payload };
  };

  return factoryParams => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actualProvider = useMemo(
      () => (provider instanceof Function ? provider(factoryParams) : provider),
      // TODO: Fix this dependency check to be lint compliant
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [...Object.values(factoryParams as {})]
    );

    const invoke = useCallback(
      (input: TInput) => {
        dispatch({ status: 'loading' });
        useCase(actualProvider, input)
          .then(output => dispatch({ status: 'success', data: output }))
          .catch(e =>
            dispatch({ status: 'error', errors: [AppError.assert(e)] })
          );
      },
      [actualProvider]
    );

    return { invoke, state };
  };
}
