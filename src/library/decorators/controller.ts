import "reflect-metadata";
import { Metadata } from "../types/Metadata";
import { Methods } from "../types/Methods";
import AppRouter from "../../routes/AppRouter";

// export function Controller(routePrefix: string) {
//   return function (target: Function) {
export function Controller(target: Function) {
  const router = AppRouter.init;

  /// Handle routes
  for (let methodKey in target.prototype) {
    /// Routing section
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

    /// Add Middlewares

    /// Validate routes

    /// Handle route if there is path
    if (routePath) {
      router[httpMethod](routePath, routeHandler);
    }
  }
}
// }
