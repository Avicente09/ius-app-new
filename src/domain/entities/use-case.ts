export interface UseCase<TRepository, TInput = void, TOutput = TInput> {
  (provider: TRepository, input: TInput): Promise<TOutput>;
}
