/**
 * ACCOUNT ROUTES.
 */

// Controllers (route handlers)

import { Request, Response } from "express";
import * as authMiddleware from "../middlewares/auth.middleware";
import * as accountController from "../components/account.controller";
import * as apiResponse from "../util/restful.response.util";

export function accountRoutes(app: any): void {

  /**
   * You can add as many middleware you want just using an array [authMiddleware.isAuthenticated, another middleware, etc]
   */
  app.get("/accessLogs", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    accountController.getAccount(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });
  /**
   * You can add as many middleware you want just using an array [authMiddleware.isAuthenticated, another middleware, etc]
   */
  app.get("/accessLogs/search/:id", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    accountController.getAccount(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  /**
   * You can add as many middleware you want just using an array [authMiddleware.isAuthenticated, another middleware, etc]
   */
  app.get("/account/:id", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    accountController.getAccount(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  app.patch("/account/:id", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    accountController.postAccount(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  app.post("/account", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    accountController.postAccount(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

  app.put("/account/password/:id", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    accountController.putAccount(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });


  app.delete("/account/:token/:id", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {

    /**
     *  Even that we are including a token in the request header, is a good practice to pass another internal token in the resource name.
     */

     accountController.deleteAccount(req, res).then(function (_result) {

      /** Notice that I am separating the response in a function to have flexibility of returning any kind of RESTFUL response such JSON, XML, MRSS, SOAP, etc */
      apiResponse.default(res, _result);

    }, function (_err) {
      apiResponse.default(res, _err);
    });

  });

}



