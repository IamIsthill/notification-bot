import express from "express";

import { FACEBOOK_VERIFICATION } from "../config/env";
import { BaseError } from "../utils/error";
import { STATUS_CODE } from "../utils/status-code";

import { IGetVerification, IWebhookPost } from "../interface/webhook.interface";
import { logger } from "../utils/logger";

function getVerification(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  try {
    const query: IGetVerification = request.query;
    if (query["hub.verify_token"] != FACEBOOK_VERIFICATION) {
      throw new BaseError(
        "Provided token are not equal",
        STATUS_CODE.UNAUTHORIZED
      );
    }
    response.setHeader("Content-Type", "text/plain");
    logger.info("Successfully completed verification", query["hub.challenge"]);
    return response.status(STATUS_CODE.SUCCESS).send(query["hub.challenge"]);
  } catch (error) {
    next(error);
  }
}

function webhookPost(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  try {
    const payload = request.body as IWebhookPost;
    if (payload.object != "page") {
      throw new BaseError("Incorrect payload", STATUS_CODE.INTERNAL_ERROR);
    }
    const entries = payload.entry;
    const messages = entries.flatMap((entry) =>
      entry.messaging.map((message) => ({
        user_id: message.sender.id,
        page_text: message.message?.text ?? "",
      }))
    );
    const tracked_pages = messages.map((msg) => ({
      user_id: msg.user_id,
      content: msg.page_text,
    }));
    response.status(200).json({ tracked_pages });
  } catch (error) {
    next(error);
  }
}

const webhookController = {
  getVerification,
  webhookPost,
};

export default webhookController;
