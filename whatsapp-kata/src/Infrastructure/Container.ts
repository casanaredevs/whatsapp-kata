import { ContainerBuilder } from "node-dependency-injection";
import { WsCreate } from '../Application/ws-external/WsExternal.create'
import { WsImplements } from "./repository/ws.implements.repository";
import { WsCtrl } from "./controllers/ws.controller";


const container = new ContainerBuilder();

container.register("ws.implements", WsImplements);
const WsDependency = container.get("ws.implements");

container.register("ws.create", WsCreate).addArgument(WsDependency);
const WsCreator = container.get("ws.create");

container.register("ws.client", WsCtrl).addArgument(WsCreator)

export default container