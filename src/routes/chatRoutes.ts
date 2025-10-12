import express from "express";
import { getResponse } from "../controllers/chatController";

const chatRouter = express.Router();

chatRouter.post("/", getResponse);

export default chatRouter;
