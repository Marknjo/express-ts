"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
require("reflect-metadata");
var Metadata_1 = require("../types/Metadata");
function Validator(validator) {
    return function (constructor, methodKey, _desc) {
        Reflect.defineMetadata(Metadata_1.Metadata.Validator, validator, constructor, methodKey);
    };
}
exports.Validator = Validator;
