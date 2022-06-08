"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Put = exports.Patch = exports.Post = exports.Get = void 0;
require("reflect-metadata");
var Metadata_1 = require("../types/Metadata");
var Methods_1 = require("../types/Methods");
var routeBinder = function (httpMethod) {
    return function (path) {
        return function (target, methodKey, _1) {
            Reflect.defineMetadata(Metadata_1.Metadata.Path, path, target, methodKey);
            Reflect.defineMetadata(Metadata_1.Metadata.Method, httpMethod, target, methodKey);
        };
    };
};
exports.Get = routeBinder(Methods_1.Methods.GET);
exports.Post = routeBinder(Methods_1.Methods.POST);
exports.Patch = routeBinder(Methods_1.Methods.PATCH);
exports.Put = routeBinder(Methods_1.Methods.PUT);
exports.Delete = routeBinder(Methods_1.Methods.DELETE);
