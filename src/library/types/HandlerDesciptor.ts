import { RequestHandler } from "express";

export interface HandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}
