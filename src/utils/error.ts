export class BaseError extends Error {
  public readonly timestamp: string;
  constructor(
    public readonly message: string,
    public readonly statusCode: number = 500,
    public readonly isOperational: boolean = true
  ) {
    super(message);
    this.timestamp = new Date().toISOString();

    // Restore prototype for proper stack tracing
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = new.target.name;
    if (typeof Error.captureStackTrace == "function") {
      Error.captureStackTrace(this, new.target);
    }
  }
}
