"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = require("express");
const Metadata_1 = require("../types/Metadata");
const router = (0, express_1.Router)();
const Controller = (routePrefix) => (target) => {
    for (const methodKey of target.prototype) {
        const routeHandler = target.prototype[methodKey];
        const httpMethod = Reflect.getMetadata(Metadata_1.Metadata.Method, target.prototype, methodKey);
        const routePath = Reflect.getMetadata(Metadata_1.Metadata.Path, target.prototype, methodKey);
        if (routePath) {
            router[httpMethod](`${routePrefix}${routePath}`, routeHandler);
        }
    }
};
exports.default = Controller;
