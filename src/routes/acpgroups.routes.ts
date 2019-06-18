/**
 * ACPGROUPS ROUTES.
 */

// Controllers (route handlers)

import { Request, Response } from "express";
import * as authMiddleware from "../middlewares/auth.middleware";
import * as acpGroupsController from "../components/acpgroups.controller";
import * as apiResponse from "../util/restful.response.util";

export function acpGroupsRoutes(app: any): void {

  app.get("/acpGroups", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    acpGroupsController.getAcpGroups(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  app.get("/acpGroups/search/:id", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    acpGroupsController.searchAcpGroups(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  app.get("/acpGroups/:id", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    acpGroupsController.getAcpGroupsyAcpId(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  app.put("/acpGroups", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    acpGroupsController.getAcpGroupsyAcpId(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  /**
   * NOTE: SHALL USE DELETE METHOD NOT POST  */
  app.post("/acpGroups/delete", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    acpGroupsController.getAcpGroupsyAcpId(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  
}




