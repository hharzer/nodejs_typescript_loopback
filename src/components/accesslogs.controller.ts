import { Request, Response } from "express";
import { AccessLogsService } from "./accesslogs.service";

/**
 * GET /getAccessLogs
 */
export let getAccessLogs = (req: Request, res: Response): Promise<any> => {

  return new Promise((resolve, reject) => {

    const accessLogsServiceInstance = new AccessLogsService();
    const accessLogsServiceResult = accessLogsServiceInstance.getAccessLogs();
      if (accessLogsServiceResult) {
        resolve(accessLogsServiceResult);
      } else {
        res.statusCode = 500;
        reject("Error");
      }
    }).catch(_error => {
      console.log("caught", _error.message);
    });

};

/**
 * GET /searchAccessLogs
 */
export let searchAccessLogs = (req: Request, res: Response): Promise<any> => {

    return new Promise((resolve, reject) => {

    req.assert("criteria", "Criteria cannot be blank").notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      res.statusCode = 422;
      reject(errors);
    }

    const accessLogsService = new AccessLogsService();
    const searchResults = accessLogsService.searchAccessLogs(req.params.criteria);
    if (searchResults) {
      resolve(searchResults);
    } else {
      res.statusCode = 500;
      reject("Error");
    }

  });

};

/**
 * Get /getLastAccessLogByAcpId
 */
export let getLastAccessLogByAcpId = (req: Request, res: Response): Promise<any> => {

  return new Promise((resolve, reject) => {

    req.assert("id", "ID cannot be blank").isEmpty();
    const errors = req.validationErrors();

    if (errors) {
      res.statusCode = 422;
      reject(errors);
    }

    const accessLogsService = new AccessLogsService();
    const accessLogsServiceResults = accessLogsService.searchAccessLogs(req.params.id);

    if (accessLogsServiceResults) {
      resolve(accessLogsServiceResults);
    } else {
      res.statusCode = 500;
      reject("Error");
    }

  });

};
