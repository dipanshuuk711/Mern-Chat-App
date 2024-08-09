import express from 'express';
import authorized from '../middlewares/authorized.js';
import { getUsersForSideBar } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/',authorized,getUsersForSideBar);

export default router;