import { logger } from "./logger";

export function requireEnv(secret: string | undefined) {
  if (!secret) {
    logger.error("This env is required");
    process.exit(1);
  }
  return secret;
}
