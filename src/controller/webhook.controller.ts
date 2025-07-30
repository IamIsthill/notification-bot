import express from "express";

import { FACEBOOK_VERIFICATION } from "../config/env";
import { BaseError } from "../utils/error";
import { STATUS_CODE } from "../utils/status-code";

import { IGetVerification } from "../interface/webhook.interface";
import { logger } from "../utils/logger";

function getVerification(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  try {
    const query: IGetVerification = request.query;
    logger.info("", query);
    if (query["hub.verify_token"] != FACEBOOK_VERIFICATION) {
      throw new BaseError(
        "Provided token are not equal",
        STATUS_CODE.UNAUTHORIZED
      );
    }
    response.setHeader("Content-Type", "text/plain");
    return response.status(STATUS_CODE.SUCCESS).send(query["hub.challenge"]);
  } catch (error) {
    next(error);
  }
}

const webhookController = {
  getVerification,
};

export default webhookController;
