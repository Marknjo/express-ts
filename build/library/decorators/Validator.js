"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("../types/MetadataKeys");
function Validator(validator) {
    return function (constructor, methodKey, _desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.Validator, validator, constructor, methodKey);
    };
}
exports.Validator = Validator;
