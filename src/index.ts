import http from "node:http";
import express from "express";

import { logger } from "./utils/logger";
import { PORT } from "./config/env";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

const server = http.createServer(app);

server.listen(PORT, "0.0.0.0", () => {
  logger.info("Notification server has started");
});
