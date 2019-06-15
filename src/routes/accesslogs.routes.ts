/**
 * ACCESS LOGS ROUTES.
 */
import { Request, Response } from "express";
import * as authMiddleware from "../middlewares/auth.middleware";
import * as accessLogsController from "../components/accesslogs.controller";
import * as apiResponse from "../util/restful.response.util";

export function accessLogsRoutes(app: any): void {

  /**
   * You can add as many middleware you want just using an array [authMiddleware.isAuthenticated, another middleware, etc]
   */
  app.get("/accessLogs", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    accessLogsController.getAccessLogs(req, res).then(function (_result) {
      apiResponse.default(res, _result);
    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });
  /**
   * You can add as many middleware you want just using an array [authMiddleware.isAuthenticated, another middleware, etc]
   */
  app.get("/accessLogs/search/:criteria", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    accessLogsController.searchAccessLogs(req, res).then(function (_result) {
      apiResponse.default(res, _result);
    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

}



