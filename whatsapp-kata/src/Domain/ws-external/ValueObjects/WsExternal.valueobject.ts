import { WsExternalEntity } from '../Entities/WsExternal.entity';
export class WsExternalValues implements WsExternalEntity {
    number: string;
    msg: string;

    constructor(number: string, msg: string) {
        this.number = number
        this.msg = msg
    }
}