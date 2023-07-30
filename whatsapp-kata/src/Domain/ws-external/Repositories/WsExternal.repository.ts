import { WsExternalEntity } from '../Entities/WsExternal.entity';

export interface WsExternalRepository {
    sendMessages(msg: WsExternalEntity): Promise<any>;
}