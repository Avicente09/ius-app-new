import type { AppError } from '@domain/error-definition';

export interface UseLoadableFromLocalStorageState<TData> {
  status: 'loading' | 'ready' | 'error';
  data?: TData;
  errors: AppError[];
}

export interface UseLoadableFromLocalStorageParams<TData> {
  key: string;
  initialData?: TData;
}
