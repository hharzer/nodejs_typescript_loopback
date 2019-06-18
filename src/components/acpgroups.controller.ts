import { Request, Response } from "express";
import { AcpGroupsService } from "./acpgroups.service";

/**
 * getAcpGroups
 * @param req
 * @param res
 */
export let getAcpGroups = async (req: Request, res: Response): Promise<any> => {

  try {
    return new Promise((resolve, reject) => {
      const AcpGroupsServiceInstance = new AcpGroupsService();
      const AcpGroupsServiceResult = AcpGroupsServiceInstance.getAcpGroups();
      if (AcpGroupsServiceResult) {
        return resolve(AcpGroupsServiceResult);
      }
      else {
        res.statusCode = 500;
        return reject("Error");
      }
    });
  }
  catch (_error) {

    /** Always return a promise even when error. Keep in mind that NodeJS is 
     * a single thread enviroment if you don't resolve or reject the promise when an error occurs,
     * the call would still in the limbo until timeout making the nodejs instance unstable. */

    /** need log entry functionality for tracing ex: new Logging(_error.message);*/
    return new Promise((resolve, reject) => {
      return reject("Something bad happened");
    });
  }

};

/**
 * searchAcpGroups
 * @param req
 * @param res
 */
export let searchAcpGroups = (req: Request, res: Response): Promise<any> => {
  try {
    return new Promise((resolve, reject) => {

      /** Express JS Validation: path, param or body, message */
      req.assert("criteria", "Criteria cannot be less than 2 characters").isLength({ min: 2 });

      const errors = req.validationErrors();

      if (errors) {
        res.statusCode = 422;
        return reject(errors);
      }

      const AcpGroupsServiceInstance = new AcpGroupsService();
      const searchResults = AcpGroupsServiceInstance.searchAcpGroups(req.params.criteria);
      if (searchResults) {
        return resolve(searchResults);
      } else {
        res.statusCode = 500;
        return reject("Error");
      }

    });
  }
  catch (_error) {

    /** Always return a promise even when error. Keep in mind that NodeJS is 
     * a single thread enviroment if you don't resolve or reject the promise when an error occurs,
     * the call would still in the limbo until timeout making the nodejs instance unstable. */

    /** need log entry functionality for tracing ex: new Logging(_error.message);*/
    return new Promise((resolve, reject) => {
      return reject("Something bad happened");
    });
  }

};

/**
 * getAcpGroupsyAcpId
 * @param req
 * @param res
 */
export let getAcpGroupsyAcpId = (req: Request, res: Response): Promise<any> => {
  try {
    return new Promise((resolve, reject) => {

      /** Express JS Validation: path, param or body, message */
      req.assert("id", "ID cannot be blank1").isEmpty();
      const errors = req.validationErrors();

      if (errors) {
        res.statusCode = 422;
        return reject(errors);
      }

      const AcpGroupsServiceInstance = new AcpGroupsService();
      const AcpGroupsServiceResults = AcpGroupsServiceInstance.getAcpGroupsByAcpId(req.params.id);


      if (AcpGroupsServiceResults) {
        return resolve(AcpGroupsServiceResults);
      } else {
        res.statusCode = 500;
        return reject("Error");
      }

    });
  }
  catch (_error) {
    /** Always return a promise even when error. Keep in mind that NodeJS is 
     * a single thread enviroment if you don't resolve or reject the promise when an error occurs,
     * the call would still in the limbo until timeout making the nodejs instance unstable. */

    /** need log entry functionality for tracing ex: new Logging(_error.message);*/
    return new Promise((resolve, reject) => {
      return reject("Something bad happened");
    });
  }
};
