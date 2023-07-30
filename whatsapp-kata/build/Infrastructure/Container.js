"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_dependency_injection_1 = require("node-dependency-injection");
const WsExternal_create_1 = require("../Application/ws-external/WsExternal.create");
const ws_implements_repository_1 = require("./repository/ws.implements.repository");
const ws_controller_1 = require("./controllers/ws.controller");
const container = new node_dependency_injection_1.ContainerBuilder();
container.register("ws.implements", ws_implements_repository_1.WsImplements);
const WsDependency = container.get("ws.implements");
container.register("ws.create", WsExternal_create_1.WsCreate).addArgument(WsDependency);
const WsCreator = container.get("ws.create");
container.register("ws.client", ws_controller_1.WsCtrl).addArgument(WsCreator);
exports.default = container;