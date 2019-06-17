// import * as constants from "../helpers/constants";
import { IAccessLogs } from "./accesslogs.interface";
import { loopBackCloudantDB } from "../util/cloudant.util";

/**
 * Database and model names
 */
const dbName = "ms-acps";
const modelName = "AcpGroupModel";

export class AccessLogsService implements IAccessLogs {

  constructor() {}
  public getAccessLogs(): any {

    const query = {
      "selector": {
        "loopback__model__name": { "$gt": "" },
      },
      "use_index": `_design/lb-index-ddoc-${modelName}`,
      "sort": [{ "createdDateTime:string": "desc" }],
    };

    return loopBackCloudantDB.runQuery(`${dbName}`, `${modelName}`, query);

  }
  public searchAccessLogs(criteria: string): any {

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
  }

  /**
   * getLastAccessLogByAcpId
   * @param _id
   */
  public getLastAccessLogByAcpId(_id: string): any {

    // call to the DB
    return _id;
  }
}

