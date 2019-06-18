// import * as constants from "../helpers/constants";
import { IAcpGroups } from "./acpgroups.interface";
import { loopBackCloudantDB } from "../util/cloudant.util";


/**
 * Database and model names
 */
const dbName = "ms-acps";
const modelName = "AcpGroupModel";

export class AcpGroupsService implements IAcpGroups {

  constructor() { }

  /**
   * getAcpGroups
   */
  public getAcpGroups(): any {
    try {

      const query = {
        "selector": {
          "loopback__model__name": { "$gt": "" },
        },
        "use_index": `_design/lb-index-ddoc-${modelName}`,
        "sort": [{ "createdDateTime:string": "desc" }],
      };

      return loopBackCloudantDB.runQuery(`${dbName}`, `${modelName}`, query);

    } catch (e) {
      return new Promise((resolve, reject) => {
        return reject("Something bad happened");
      });
    }
  }

  /**
   * searchAcpGroups
   * @param criteria 
   */
  public searchAcpGroups(criteria: string): any {

    try {
      const query = {
        "selector": {
          "$or": [
            { "name": { "$regex": "(?i)" + criteria } },
          ],
        },
        "use_index": `_design/lb-index-ddoc-${modelName}`,
        "sort": [{ "_id:string": "desc" }],
      };

      return loopBackCloudantDB.runQuery(`${dbName}`, `${modelName}`, query);

    } catch (e) {
      return new Promise((resolve, reject) => {
        return reject("Something bad happened");
      });
    }
  }

  /**
   * getAcpGroupsByAcpId
   * @param _id
   */
  public getAcpGroupsByAcpId(_id: string): any {

    try {
      /**Temporary promise until get logic here*/
      return new Promise((resolve, reject) => {
        return resolve("Something bad happened");
      });
    } catch (e) {
      return new Promise((resolve, reject) => {
        return reject("Something bad happened");
      });

    }
  }
}
