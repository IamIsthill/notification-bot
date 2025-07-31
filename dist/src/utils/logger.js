"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
class Logger {
    info(message, ...params) {
        console.info(`[INFO]${this.timestamp()}: ${message} ${params.length > 0 ? `-` : ""}`, ...params);
    }
    error(message, ...params) {
        console.error(`[ERROR]${this.timestamp()}: ${message} ${params.length > 0 ? `-` : ""}`, ...params);
    }
    timestamp() {
        return new Date().toISOString();
    }
}
exports.logger = new Logger();
