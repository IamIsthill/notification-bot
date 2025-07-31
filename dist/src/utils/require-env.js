"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireEnv = requireEnv;
const logger_1 = require("./logger");
function requireEnv(secret) {
    if (!secret) {
        logger_1.logger.error("This env is required");
        process.exit(1);
    }
    return secret;
}
