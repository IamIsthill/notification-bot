import express from "express";
import webhookController from "../controller/webhook.controller";

const webhookRouter = express.Router();

webhookRouter.get("/", webhookController.getVerification);
webhookRouter.post("/", webhookController.webhookPost);

export default webhookRouter;
