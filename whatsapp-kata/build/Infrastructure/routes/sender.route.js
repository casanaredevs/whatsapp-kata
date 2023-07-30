"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Container_1 = __importDefault(require("../Container"));
const router = (0, express_1.Router)();
exports.router = router;
/**
 * http://localhost/lead POST
 */
const leadCtrl = Container_1.default.get("ws.client");
router.post("/sendmessage", leadCtrl.sendCtrl);
