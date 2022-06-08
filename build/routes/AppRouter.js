"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
var express_1 = require("express");
var AppRouter = (function () {
    function AppRouter() {
    }
    Object.defineProperty(AppRouter, "init", {
        get: function () {
            if (!AppRouter.instance) {
                AppRouter.instance = (0, express_1.Router)();
            }
            return AppRouter.instance;
        },
        enumerable: false,
        configurable: true
    });
    return AppRouter;
}());
exports.AppRouter = AppRouter;
