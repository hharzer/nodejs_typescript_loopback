import { Request, Response } from "express";
import { AccessLogsService } from "./accesslogs.service";

/**
 * getAccessLogs
 * @param req
 * @param res
 */
export let getAccessLogs = async (req: Request, res: Response): Promise<any> => {

  try {
    return new Promise((resolve, reject) => {
      const accessLogsServiceInstance = new AccessLogsService();
      const accessLogsServiceResult = accessLogsServiceInstance.getAccessLogs();
      if (accessLogsServiceResult) {
        return resolve(accessLogsServiceResult);
      }
      else {
        res.statusCode = 500;
        return reject("Error");
      }
    });
  }
  catch (_error) {
    console.log("caught", _error.message);
  }

};

/**
 * searchAccessLogs
 * @param req
 * @param res
 */
export let searchAccessLogs = (req: Request, res: Response): Promise<any> => {
  try {
    return new Promise((resolve, reject) => {

      // req.assert("criteria", "Criteria cannot be blank").isEmpty();
      req.assert("criteria", "Criteria cannot be less than 2 characters").isLength({ min: 2 });

      const errors = req.validationErrors();

      if (errors) {
        res.statusCode = 422;
        return reject(errors);
      }

      const accessLogsService = new AccessLogsService();
      const searchResults = accessLogsService.searchAccessLogs(req.params.criteria);
      if (searchResults) {
        return resolve(searchResults);
      } else {
        res.statusCode = 500;
        return reject("Error");
      }

    });
  }
  catch (_error) {
    console.log("caught", _error.message);
  }

};

/**
 * getLastAccessLogByAcpId
 * @param req
 * @param res
 */
export let getLastAccessLogByAcpId = (req: Request, res: Response): Promise<any> => {
  try {
    return new Promise((resolve, reject) => {

      req.assert("id", "ID cannot be blank1").isEmpty();
      const errors = req.validationErrors();

      if (errors) {
        res.statusCode = 422;
        return reject(errors);
      }

      const accessLogsService = new AccessLogsService();
      const accessLogsServiceResults = accessLogsService.getLastAccessLogByAcpId(req.params.id);


      if (accessLogsServiceResults) {
        return resolve(accessLogsServiceResults);
      } else {
        res.statusCode = 500;
        return reject("Error");
      }

    });
  }
  catch (_error) {
    console.log("caught", _error.message);
  }
};
