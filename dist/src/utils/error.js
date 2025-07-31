"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(message, statusCode = 500, isOperational = true) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.timestamp = new Date().toISOString();
        // Restore prototype for proper stack tracing
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = new.target.name;
        if (typeof Error.captureStackTrace == "function") {
            Error.captureStackTrace(this, new.target);
        }
    }
}
exports.BaseError = BaseError;
