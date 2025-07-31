"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FACEBOOK_VERIFICATION = exports.PORT = void 0;
require("dotenv/config");
const require_env_1 = require("../utils/require-env");
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
exports.PORT = PORT;
const FACEBOOK_VERIFICATION = (0, require_env_1.requireEnv)(process.env.FACEBOOK_WEBHOOK_TOKEN);
exports.FACEBOOK_VERIFICATION = FACEBOOK_VERIFICATION;
