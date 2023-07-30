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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsImplements = void 0;
const whatsapp_web_js_1 = require("whatsapp-web.js");
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
class WsImplements extends whatsapp_web_js_1.Client {
    constructor() {
        super({
            authStrategy: new whatsapp_web_js_1.LocalAuth({
                clientId: 'casanare-devs-ws',
                dataPath: './session'
            }),
            puppeteer: {
                headless: true,
                args: ["--no-sandbox",
                    "--disable-setuid-sandbox",
                    "--disable-dev-shm-usage",
                    "--disable-accelerated-2d-canvas",
                    "--no-first-run",
                    "--no-zygote",
                    "--disable-gpu"],
            }
        });
        console.log('...Iniciando servicio');
        this.initialize();
        this.on("ready", () => {
            console.log('LOGIN_SUCCESS');
        });
        this.on("disconnected", () => {
            console.log("SESSION_CLOSED");
        });
        this.on("qr", (qr) => {
            qrcode_terminal_1.default.generate(qr, { small: true });
        });
    }
    sendMessages(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.sendMessage(msg.number, msg.msg);
                return { id: resp.id.id };
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.WsImplements = WsImplements;
