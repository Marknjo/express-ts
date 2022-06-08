import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "../types/MetadataKeys";
import { HandlerDescriptor } from "../types/HandlerDesciptor";

export function Validator(validator: RequestHandler) {
  return function (
    constructor: any,
    methodKey: string,
    _desc: HandlerDescriptor
  ) {
    Reflect.defineMetadata(
      MetadataKeys.Validator,
      validator,
      constructor,
      methodKey
    );
  };
}
