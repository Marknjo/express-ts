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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
require("reflect-metadata");
var Metadata_1 = require("../types/Metadata");
function Middleware(middleware) {
    return function (constructor, methodKey, _desc) {
        var middlewares = Reflect.getMetadata(Metadata_1.Metadata.Middlewares, constructor, methodKey) || [];
        Reflect.defineMetadata(Metadata_1.Metadata.Middlewares, __spreadArray(__spreadArray([], middlewares, true), [middleware], false), constructor, methodKey);
    };
}
exports.Middleware = Middleware;
