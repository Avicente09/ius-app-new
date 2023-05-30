import type { ErrorCode } from '../error-catalog';
import { identifyRootCause } from '../identify-root-cause';

export interface AppErrorConstructorOptions<
  TErrorCode extends string = ErrorCode
> {
  code: TErrorCode;
  rootCause?: Error;
}

export class AppError<TErrorCode extends string = ErrorCode> extends Error {
  //#region properties
  private _code: TErrorCode;
  private _rootCause: Error | undefined;
  //#endregion properties

  //#region methods
  constructor({ code, rootCause }: AppErrorConstructorOptions<TErrorCode>) {
    super(code);
    this._code = code;
    this._rootCause = rootCause;
  }
  //#endregion methods

  //#region  accessors
  get code(): TErrorCode {
    return this._code;
  }
  //#endregion accessors

  //#region static
  static assert(source: unknown): AppError {
    if (source instanceof AppError) {
      return source;
    }

    return new AppError({
      code: 'UNHANDLED_EXCEPTION',
      rootCause: identifyRootCause(source),
    });
  }
  //#endregion static
}
