export function fromObject<T>(source: T): Array<keyof T | T[keyof T]> {
  if (source == null) {
    throw new Error('Source cannot be null');
  }

  if (!(source instanceof Object)) {
    throw new Error('Source must be an object');
  }

  return Object.keys(source).reduce<Array<keyof T | T[keyof T]>>(
    (prev, curr) => [...prev, curr as keyof T, source[curr as keyof T]],
    []
  );
}
