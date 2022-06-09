"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRouter = void 0;
var express_1 = require("express");
var adminRoutes_1 = require("./adminRoutes");
var clientRouter = (0, express_1.Router)();
exports.clientRouter = clientRouter;
clientRouter.use("/:errorId/sys-admin", adminRoutes_1.adminRouter);
