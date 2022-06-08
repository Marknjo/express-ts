import { RequestHandler } from "express";
import "reflect-metadata";
import { MetadataKeys } from "../types/MetadataKeys";
import { HttpMethods } from "../types/HttpMethods";

interface ControllerMethodDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

const routeBinder = function (httpMethod: string) {
  return (path: string) =>
    (target: any, methodKey: string, _1: ControllerMethodDescriptor) => {
      /// path for the route
      Reflect.defineMetadata(MetadataKeys.Path, path, target, methodKey);

      /// Define requested method
      Reflect.defineMetadata(
        MetadataKeys.Method,
        httpMethod,
        target,
        methodKey
      );
    };
};

export const Get = routeBinder(HttpMethods.GET);
export const Post = routeBinder(HttpMethods.POST);
export const Patch = routeBinder(HttpMethods.PATCH);
export const Put = routeBinder(HttpMethods.PUT);
export const Delete = routeBinder(HttpMethods.DELETE);
