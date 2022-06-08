import "reflect-metadata";
import { RequestHandler } from "express";
import { Metadata } from "../types/Metadata";

export function Middleware(middleware: RequestHandler) {
  return function (
    constructor: any,
    methodKey: string,
    _desc: PropertyDescriptor
  ) {
    /// Get existing middlewares
    const middlewares =
      Reflect.getMetadata(Metadata.Middlewares, constructor, methodKey) || [];

    /// define new middleware
    Reflect.defineMetadata(
      Metadata.Middlewares,
      [...middlewares, middleware],
      constructor,
      methodKey
    );
  };
}
