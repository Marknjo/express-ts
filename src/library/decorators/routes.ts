import { RequestHandler } from "express";
import "reflect-metadata";
import { Metadata } from "../types/Metadata";
import { Methods } from "../types/Methods";

interface ControllerMethodDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

const routeBinder = function (httpMethod: string) {
  return (path: string) =>
    (target: any, methodKey: string, _1: ControllerMethodDescriptor) => {
      /// path for the route
      Reflect.defineMetadata(Metadata.Path, path, target, methodKey);

      /// Define requested method
      Reflect.defineMetadata(Metadata.Method, httpMethod, target, methodKey);
    };
};

export const Get = routeBinder(Methods.GET);
export const Post = routeBinder(Methods.POST);
export const Patch = routeBinder(Methods.PATCH);
export const Put = routeBinder(Methods.PUT);
export const Delete = routeBinder(Methods.DELETE);
