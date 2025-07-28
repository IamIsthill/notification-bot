class Logger {
  info(message: string, ...params: unknown[]) {
    console.info(`[INFO]${this.timestamp()}: ${message} - `, ...params);
  }

  error(message: string, ...params: unknown[]) {
    console.error(`[ERROR]${this.timestamp()}: ${message} - `, ...params);
  }

  private timestamp() {
    return new Date().toISOString();
  }
}

export const logger = new Logger();
