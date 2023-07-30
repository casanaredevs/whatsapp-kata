import { WsExternalEntity } from "../../Domain/ws-external/Entities/WsExternal.entity";
import { WsExternalRepository } from "../../Domain/ws-external/Repositories/WsExternal.repository";
import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal"



export class WsImplements extends Client implements WsExternalRepository {

    constructor() {
        super({
            authStrategy: new LocalAuth({
                clientId: 'casanare-devs-ws',
                dataPath: './session'
            }),
            puppeteer: {
                headless: true,
                args: ["--no-sandbox"],
              }
        });

        console.log('...Iniciando servicio');

        this.initialize();

        this.on("ready", () => {
            console.log('LOGIN_SUCCESS')
        })

        this.on("disconnected", () => {
            console.log("SESSION_CLOSED")
            this.initialize()
        })

        this.on("qr", (qr) => {
            qrcode.generate(qr, { small: true });
        })

    }


    async sendMessages(msg: WsExternalEntity): Promise<any> {
        try {
            const resp = await this.sendMessage(msg.number, msg.msg)
            return { id: resp.id.id}
        } catch (error) {
            console.log(error)
        }
    }

}