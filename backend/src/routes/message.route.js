import express from "express";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  getAllContacts,
  getChatPatners,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.use(arcjetProtection, protectedRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPatners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);

export default router;
