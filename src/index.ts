import http from "node:http";
import express from "express";

import { logger } from "./utils/logger";
import { BaseError } from "./utils/error";
import { PORT } from "./config/env";
import { errorHandler } from "./middleware/error-handler";
import webhookRouter from "./routes/webhook.routes";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.use("/verification", webhookRouter);

app.use(errorHandler);

const server = http.createServer(app);

server.listen(PORT, "0.0.0.0", () => {
  logger.info("Notification server has started");
});
