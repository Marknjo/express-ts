import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "../types/MetadataKeys";

export function Middleware(middleware: RequestHandler) {
  return function (
    constructor: any,
    methodKey: string,
    _desc: PropertyDescriptor
  ) {
    /// Get existing middlewares
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middlewares, constructor, methodKey) ||
      [];

    /// define new middleware
    Reflect.defineMetadata(
      MetadataKeys.Middlewares,
      [...middlewares, middleware],
      constructor,
      methodKey
    );
  };
}
