"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Put = exports.Patch = exports.Post = exports.Get = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("../types/MetadataKeys");
var HttpMethods_1 = require("../types/HttpMethods");
var routeBinder = function (httpMethod) {
    return function (path) {
        return function (target, methodKey, _1) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.Path, path, target, methodKey);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.Method, httpMethod, target, methodKey);
        };
    };
};
exports.Get = routeBinder(HttpMethods_1.HttpMethods.GET);
exports.Post = routeBinder(HttpMethods_1.HttpMethods.POST);
exports.Patch = routeBinder(HttpMethods_1.HttpMethods.PATCH);
exports.Put = routeBinder(HttpMethods_1.HttpMethods.PUT);
exports.Delete = routeBinder(HttpMethods_1.HttpMethods.DELETE);
