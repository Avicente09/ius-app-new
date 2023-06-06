import type { AppError } from '@domain/error-definition';

export interface InvokeBusinessHookResultState<TData> {
  status: 'idle' | 'loading' | 'success' | 'error';
  data?: TData;
  errors: Array<AppError>;
}

export interface InvokeBusinessHookResult<TState, TInput = TState> {
  invoke: (input: TInput) => void;
  state: InvokeBusinessHookResultState<TState>;
}

export interface InvokeBusinessHook<
  TInput = void,
  TOutput = TInput,
  TFactoryParams = void
> {
  (factoryParams: TFactoryParams): InvokeBusinessHookResult<TOutput, TInput>;
}

export type InvokeBusinessHookProvider<TRepository, TFactoryParams = void> =
  | TRepository
  | ((factoryParams: TFactoryParams) => TRepository);
