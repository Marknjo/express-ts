"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
            var middlewares = Reflect.getMetadata(Metadata_1.Metadata.Middlewares, constructor.prototype, methodKey) || [];
            if (routePath) {
                router[httpMethod].apply(router, __spreadArray(__spreadArray(["".concat(routePrefix).concat(routePath)], middlewares, false), [routeHandler], false));
            }
        }
    };
}
exports.Controller = Controller;
