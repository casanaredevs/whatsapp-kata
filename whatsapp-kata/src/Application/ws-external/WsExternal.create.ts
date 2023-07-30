import { WsExternalValues } from '../../Domain/ws-external/ValueObjects/WsExternal.valueobject';
import { WsExternalEntity } from '../../Domain/ws-external/Entities/WsExternal.entity';
import { WsExternalRepository } from '../../Domain/ws-external/Repositories/WsExternal.repository';
export class WsCreate {
    constructor(readonly service: WsExternalRepository){}

    sendMessageCtrl(msg: WsExternalEntity){
        const data = new WsExternalValues(msg.number, msg.msg);
        const resp = this.service.sendMessages(data)
        return resp
    }

}