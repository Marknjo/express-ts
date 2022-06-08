import "reflect-metadata";
import { RequestHandler } from "express";
import { Metadata } from "../types/Metadata";

export function Validator(validator: RequestHandler) {
  return function (
    constructor: any,
    methodKey: string,
    _desc: PropertyDescriptor
  ) {
    Reflect.defineMetadata(
      Metadata.Validator,
      validator,
      constructor,
      methodKey
    );
  };
}
