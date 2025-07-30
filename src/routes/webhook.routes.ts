import express from "express";
import webhookController from "../controller/webhook.controller";

const webhookRouter = express.Router();

webhookRouter.get("/", webhookController.getVerification);

export default webhookRouter;
