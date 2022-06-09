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
exports.Controller = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("../types/MetadataKeys");
var noValidator = function (_1, _2, next) {
    next();
};
function Controller(router) {
    return function (constructor) {
        for (var methodKey in constructor.prototype) {
            var routeHandler = constructor.prototype[methodKey];
            var httpMethod = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Method, constructor.prototype, methodKey);
            var routePath = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Path, constructor.prototype, methodKey);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Middlewares, constructor.prototype, methodKey) || [];
            var validator = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Validator, constructor.prototype, methodKey) || noValidator;
            if (routePath) {
                router[httpMethod].apply(router, __spreadArray(__spreadArray([routePath,
                    validator], middlewares, false), [routeHandler], false));
            }
        }
    };
}
exports.Controller = Controller;
