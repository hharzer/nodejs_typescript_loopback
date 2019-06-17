/**
 * ACCESS LOGS ROUTES.
 */
import { Request, Response } from "express";
import * as authMiddleware from "../middlewares/auth.middleware";
import { SwaggerInputValidator } from "../middlewares/swagger.middleware";
import * as accessLogsController from "../components/accesslogs.controller";
import * as apiResponse from "../util/restful.response.util";

export function accessLogsRoutes(app: any): void {

  /** */
  app.get("/accessLogs", [authMiddleware.isAuthenticated, SwaggerInputValidator], function (req: Request, res: Response) {

    accessLogsController.getAccessLogs(req, res).then(function (_result) {
      apiResponse.default(res, _result);
    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  app.get("/accessLogs/search/:criteria", [authMiddleware.isAuthenticated, SwaggerInputValidator], function (req: Request, res: Response) {

    accessLogsController.searchAccessLogs(req, res).then(function (_result) {
      apiResponse.default(res, _result);
    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });


  app.get("/accessLogs/:id", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    accessLogsController.getLastAccessLogByAcpId(req, res).then(function (_result) {
      apiResponse.default(res, _result);
    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

}



