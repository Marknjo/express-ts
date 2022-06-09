"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRoute = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("../types/MetadataKeys");
function MergeRoute(mergeOptions) {
    return function (constructor) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.MergeParams, __assign(__assign({}, mergeOptions), { parentConstrutor: constructor }), constructor);
    };
}
exports.MergeRoute = MergeRoute;
