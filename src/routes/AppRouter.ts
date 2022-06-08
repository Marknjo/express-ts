import { Router } from "express";

class AppRouter {
  private static instance: Router;

  /**
   * Initialize express router instance
   */
  static get init() {
    if (!AppRouter.instance) {
      AppRouter.instance = Router();
    }

    return AppRouter.instance;
  }
}

export default AppRouter;
