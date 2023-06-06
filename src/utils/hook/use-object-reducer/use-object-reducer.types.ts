export type SetterAction<T> = Partial<T> | 'clear' | { reset: T };
