import "reflect-metadata";
import { MetadataKeys } from "../types/MetadataKeys";
import { HttpMethods } from "../types/HttpMethods";
import { RequestHandler, Router } from "express";

///
const noValidator: RequestHandler = (_1, _2, next) => {
  next();
};

// export function Controller(routePrefix: string = "") {
export function Controller(router: Router) {
  return function (constructor: Function) {
    /// Handle routes
    for (let methodKey in constructor.prototype) {
      /// Routing section
      const routeHandler = constructor.prototype[methodKey];

      const httpMethod: HttpMethods = Reflect.getMetadata(
        MetadataKeys.Method,
        constructor.prototype,
        methodKey
      );

      const routePath = Reflect.getMetadata(
        MetadataKeys.Path,
        constructor.prototype,
        methodKey
      );

      /// Add Middlewares
      const middlewares =
        Reflect.getMetadata(
          MetadataKeys.Middlewares,
          constructor.prototype,
          methodKey
        ) || [];

      /// Validator
      const validator =
        Reflect.getMetadata(
          MetadataKeys.Validator,
          constructor.prototype,
          methodKey
        ) || noValidator;

      /// Handle route if there is path
      if (routePath) {
        router[httpMethod](
          // `${routePrefix}${routePath}`,
          routePath,
          validator,
          ...middlewares,
          routeHandler
        );
      }
    }
  };
}
