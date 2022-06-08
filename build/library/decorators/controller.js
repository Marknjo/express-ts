"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
var Metadata_1 = require("../types/Metadata");
var AppRouter_1 = __importDefault(require("../../routes/AppRouter"));
function Controller(routePrefix) {
    if (routePrefix === void 0) { routePrefix = ""; }
    return function (constructor) {
        var router = AppRouter_1.default.init;
        for (var methodKey in constructor.prototype) {
            var routeHandler = constructor.prototype[methodKey];
            var httpMethod = Reflect.getMetadata(Metadata_1.Metadata.Method, constructor.prototype, methodKey);
            var routePath = Reflect.getMetadata(Metadata_1.Metadata.Path, constructor.prototype, methodKey);
            if (routePath) {
                router[httpMethod]("".concat(routePrefix).concat(routePath), routeHandler);
            }
        }
    };
}
exports.Controller = Controller;
