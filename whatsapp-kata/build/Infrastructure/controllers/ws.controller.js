"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsCtrl = void 0;
class WsCtrl {
    constructor(WsCreator) {
        this.WsCreator = WsCreator;
        this.sendCtrl = ({ body }, res) => __awaiter(this, void 0, void 0, function* () {
            const dataFront = Object.assign({}, body);
            const dataSend = { number: dataFront.number, msg: dataFront.msg };
            const respData = yield this.WsCreator.sendMessageCtrl(dataSend);
            res.json(Object.assign({}, respData)).status(200);
        });
    }
}
exports.WsCtrl = WsCtrl;
