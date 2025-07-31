"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../config/env");
const error_1 = require("../utils/error");
const status_code_1 = require("../utils/status-code");
const logger_1 = require("../utils/logger");
function getVerification(request, response, next) {
    try {
        const query = request.query;
        if (query["hub.verify_token"] != env_1.FACEBOOK_VERIFICATION) {
            throw new error_1.BaseError("Provided token are not equal", status_code_1.STATUS_CODE.UNAUTHORIZED);
        }
        response.setHeader("Content-Type", "text/plain");
        logger_1.logger.info("Successfully completed verification", query["hub.challenge"]);
        return response.status(status_code_1.STATUS_CODE.SUCCESS).send(query["hub.challenge"]);
    }
    catch (error) {
        next(error);
    }
}
function webhookPost(request, response, next) {
    try {
        const payload = request.body;
        if (payload.object != "page") {
            throw new error_1.BaseError("Incorrect payload", status_code_1.STATUS_CODE.INTERNAL_ERROR);
        }
        const entries = payload.entry;
        const messages = entries.flatMap((entry) => entry.messaging.map((message) => {
            var _a, _b;
            return ({
                user_id: message.sender.id,
                page_text: (_b = (_a = message.message) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "",
            });
        }));
        const tracked_pages = messages.map((msg) => ({
            user_id: msg.user_id,
            content: msg.page_text,
        }));
        response.status(200).json({ tracked_pages });
    }
    catch (error) {
        next(error);
    }
}
const webhookController = {
    getVerification,
    webhookPost,
};
exports.default = webhookController;
