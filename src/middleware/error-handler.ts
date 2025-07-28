import express from "express";
import { logger } from "../utils/logger";
import { BaseError } from "../utils/error";

export async function errorHandler(
  error: unknown,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  if (error instanceof BaseError) {
    logger.info(error.message, error);
    response.status(error.statusCode).json({
      message: error.message,
    });
    return;
  } else {
    logger.error("", error);
    response.status(500).json({ message: "Something went wrong" });
    return;
  }
}
