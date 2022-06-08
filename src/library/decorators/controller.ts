import "reflect-metadata";
import { Metadata } from "../types/Metadata";
import { Methods } from "../types/Methods";
import AppRouter from "../../routes/AppRouter";
import { RequestHandler } from "express";

///
const noValidator: RequestHandler = (_1, _2, next) => {
  next();
};

export function Controller(routePrefix: string = "") {
  return function (constructor: Function) {
    const router = AppRouter.init;

    /// Handle routes
    for (let methodKey in constructor.prototype) {
      /// Routing section
      const routeHandler = constructor.prototype[methodKey];

      const httpMethod: Methods = Reflect.getMetadata(
        Metadata.Method,
        constructor.prototype,
        methodKey
      );

      const routePath = Reflect.getMetadata(
        Metadata.Path,
        constructor.prototype,
        methodKey
      );

      /// Add Middlewares
      const middlewares =
        Reflect.getMetadata(
          Metadata.Middlewares,
          constructor.prototype,
          methodKey
        ) || [];

      /// Validator
      const validator =
        Reflect.getMetadata(
          Metadata.Validator,
          constructor.prototype,
          methodKey
        ) || noValidator;

      /// Handle route if there is path
      if (routePath) {
        router[httpMethod](
          `${routePrefix}${routePath}`,
          validator,
          ...middlewares,
          routeHandler
        );
      }
    }
  };
}
