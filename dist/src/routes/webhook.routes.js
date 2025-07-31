"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const webhook_controller_1 = __importDefault(require("../controller/webhook.controller"));
const webhookRouter = express_1.default.Router();
webhookRouter.get("/", webhook_controller_1.default.getVerification);
webhookRouter.post("/", webhook_controller_1.default.webhookPost);
exports.default = webhookRouter;
