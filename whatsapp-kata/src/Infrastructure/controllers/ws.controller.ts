import { WsCreate } from "../../Application/ws-external/WsExternal.create";
import { Request, Response } from "express";
import { WsExternalEntity } from '../../Domain/ws-external/Entities/WsExternal.entity';

export class WsCtrl {
    constructor(private readonly WsCreator: WsCreate) {}

    public sendCtrl = async ({body}: Request, res: Response) => {
        const dataFront = {...body}
        const dataSend: WsExternalEntity = {number: dataFront.number, msg: dataFront.msg}
        const respData = await this.WsCreator.sendMessageCtrl(dataSend)
        res.json({...respData}).status(200)
    }
}