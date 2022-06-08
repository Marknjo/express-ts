"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Put = exports.Patch = exports.Post = exports.Get = void 0;
require("reflect-metadata");
const Metadata_1 = require("../types/Metadata");
const Methods_1 = require("../types/Methods");
const routeBinder = function (httpMethod) {
    return (path) => (target, methodKey, _1) => {
        Reflect.defineMetadata(Metadata_1.Metadata.Path, path, target, methodKey);
        Reflect.defineMetadata(Metadata_1.Metadata.Method, httpMethod, target, methodKey);
    };
};
exports.Get = routeBinder(Methods_1.Methods.GET);
exports.Post = routeBinder(Methods_1.Methods.POST);
exports.Patch = routeBinder(Methods_1.Methods.PATCH);
exports.Put = routeBinder(Methods_1.Methods.PUT);
exports.Delete = routeBinder(Methods_1.Methods.DELETE);
