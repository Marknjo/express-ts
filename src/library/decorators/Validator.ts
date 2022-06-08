import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "../types/MetadataKeys";

export function Validator(validator: RequestHandler) {
  return function (
    constructor: any,
    methodKey: string,
    _desc: PropertyDescriptor
  ) {
    Reflect.defineMetadata(
      MetadataKeys.Validator,
      validator,
      constructor,
      methodKey
    );
  };
}
