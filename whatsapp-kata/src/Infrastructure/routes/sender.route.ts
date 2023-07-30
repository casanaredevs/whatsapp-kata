import { Router } from "express";
import container from "../Container";
import { WsCtrl } from "../controllers/ws.controller";
const router: Router = Router();

/**
 * http://localhost/lead POST
 */
const leadCtrl: WsCtrl = container.get("ws.client");
router.post("/sendmessage", leadCtrl.sendCtrl);

export { router };