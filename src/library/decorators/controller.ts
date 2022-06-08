import "reflect-metadata";
import { Router } from "express";
import { Metadata } from "../types/Metadata";
import { Methods } from "../types/Methods";

const router = Router();

const Controller = (routePrefix: string) => (target: Function) => {
  /// Handle routes
  for (const methodKey of target.prototype) {
    const routeHandler = target.prototype[methodKey];

    const httpMethod: Methods = Reflect.getMetadata(
      Metadata.Method,
      target.prototype,
      methodKey
    );
    const routePath = Reflect.getMetadata(
      Metadata.Path,
      target.prototype,
      methodKey
    );

    if (routePath) {
      //router[`${}${httpMethod}`]( routePath )
      router[httpMethod](`${routePrefix}${routePath}`, routeHandler);
    }
  }
};

export default Controller;
