"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const express_1 = __importDefault(require("express"));
const logger_1 = require("./utils/logger");
const env_1 = require("./config/env");
const error_handler_1 = require("./middleware/error-handler");
const webhook_routes_1 = __importDefault(require("./routes/webhook.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send("Hello World");
});
app.use("/verification", webhook_routes_1.default);
app.use(error_handler_1.errorHandler);
const server = node_http_1.default.createServer(app);
server.listen(env_1.PORT, "0.0.0.0", () => {
    logger_1.logger.info("Notification server has started");
});
server.on("error", (error) => {
    logger_1.logger.error("Server failed to start", error);
    process.exit(1);
});
