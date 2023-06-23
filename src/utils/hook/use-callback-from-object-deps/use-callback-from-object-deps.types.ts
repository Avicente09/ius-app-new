export interface CallbackType<TResult, TParams extends any[] = any[]> {
  (...params: TParams): TResult;
}
