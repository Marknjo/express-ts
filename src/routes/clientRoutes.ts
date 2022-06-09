import { Router } from "express";
import { adminRouter } from "./adminRoutes";

const clientRouter = Router();

clientRouter.use("/:errorId/sys-admin", adminRouter);

export { clientRouter };
