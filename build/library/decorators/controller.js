"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
var Metadata_1 = require("../types/Metadata");
var AppRouter_1 = __importDefault(require("../../routes/AppRouter"));
function Controller(target) {
    var router = AppRouter_1.default.init;
    for (var methodKey in target.prototype) {
        var routeHandler = target.prototype[methodKey];
        var httpMethod = Reflect.getMetadata(Metadata_1.Metadata.Method, target.prototype, methodKey);
        var routePath = Reflect.getMetadata(Metadata_1.Metadata.Path, target.prototype, methodKey);
        if (routePath) {
            router[httpMethod](routePath, routeHandler);
        }
    }
}
exports.Controller = Controller;
