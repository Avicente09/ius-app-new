export function toObject<T>(source: Array<keyof T | T[keyof T]>): T {
  if (source == null) {
    throw new Error('Source cannot be null');
  }

  if (!(source instanceof Array)) {
    throw new Error('Source must be an array');
  }

  if (source.length === 0) {
    throw new Error('Source cannot be empty');
  }

  if (source.length % 2 !== 0) {
    throw new Error('Source must have an even number of elements');
  }

  return source.reduce<T>((prev, curr, index) => {
    if (index % 2 === 0) {
      return { ...prev, [curr as keyof T]: source[index + 1] };
    }

    return prev;
  }, {} as T);
}
