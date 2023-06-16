import type { UseCase } from '@domain/entities';
import { AppError } from '@domain/error-definition';
import { useMemoFromObjectDeps } from '@utils/hook/use-memo-from-object-deps';
import { useEffect, useReducer } from 'react';

import type {
  SimpleBusinessHook,
  SimpleBusinessHookProvider,
  SimpleBusinessHookResultState,
} from './create-simple-business-hook.types';

export function createSimpleBusinessHook<
  TRepository,
  TInput = void,
  TOutput = TInput,
  TFactoryParams = void
>(
  useCase: UseCase<TRepository, TInput, TOutput>,
  provider: SimpleBusinessHookProvider<TRepository, TFactoryParams>
): SimpleBusinessHook<TInput, TOutput, TFactoryParams> {
  const initialState: SimpleBusinessHookResultState<TOutput> = {
    status: 'idle',
    errors: [],
  };

  const reducer = (
    state: SimpleBusinessHookResultState<TOutput>,
    payload: Partial<SimpleBusinessHookResultState<TOutput>>
  ) => {
    return { ...state, ...payload };
  };

  return (input, factoryParams) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actualProvider = useMemoFromObjectDeps(
      () => (provider instanceof Function ? provider(factoryParams) : provider),
      factoryParams
    );

    useEffect(() => {
      dispatch({ status: 'loading' });
      useCase(actualProvider, input)
        .then(output => dispatch({ status: 'success', data: output }))
        .catch(e =>
          dispatch({ status: 'error', errors: [AppError.assert(e)] })
        );
    }, [actualProvider, input]);

    return state;
  };
}
