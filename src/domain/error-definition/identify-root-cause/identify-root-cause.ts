export function identifyRootCause(e: unknown): Error {
  if (e instanceof Error) {
    return e;
  }

  if (typeof e === 'string') {
    return new Error(e);
  }

  const asMessageContained = e as { message?: unknown };
  if (asMessageContained && typeof asMessageContained.message === 'string') {
    return new Error(asMessageContained.message);
  }

  if (e instanceof Object) {
    try {
      return new Error(JSON.stringify(e));
    } catch {
      return new Error('Non serializable error');
    }
  }

  return new Error('Empty error source');
}
