"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsCreate = void 0;
const WsExternal_valueobject_1 = require("../../Domain/ws-external/ValueObjects/WsExternal.valueobject");
class WsCreate {
    constructor(service) {
        this.service = service;
    }
    sendMessageCtrl(msg) {
        const data = new WsExternal_valueobject_1.WsExternalValues(msg.number, msg.msg);
        const resp = this.service.sendMessages(data);
        return resp;
    }
}
exports.WsCreate = WsCreate;
