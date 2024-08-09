import express from 'express';
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import authorized from '../middlewares/authorized.js';
const router = express.Router();

router.get('/:id', authorized ,getMessages)
router.post('/send/:id', authorized ,sendMessage)

export default router;