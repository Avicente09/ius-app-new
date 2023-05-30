import type { AppError } from '@domain/error-definition';

export interface SimpleBusinessHookResultState<TData> {
  status: 'idle' | 'loading' | 'success' | 'error';
  data?: TData;
  errors: Array<AppError>;
}

export interface SimpleBusinessHook<
  TInput = void,
  TOutput = TInput,
  TFactoryParams = void
> {
  (
    input: TInput,
    factoryParams: TFactoryParams
  ): SimpleBusinessHookResultState<TOutput>;
}

export type SimpleBusinessHookProvider<TRepository, TFactoryParams = void> =
  | TRepository
  | ((factoryParams: TFactoryParams) => TRepository);
