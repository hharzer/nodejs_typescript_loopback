// import * as constants from "../helpers/constants";
import { IAccessLogs } from "./accesslogs.interface";
import { loopBackCloudantDB } from "../util/cloudant.util";

export class AccessLogsService implements IAccessLogs {
    criteria?: string;
    id?: string;

    constructor(private _criteria?: string, _id?: string) {
        this.criteria = _criteria;
        this.id = _id;
    }
    public getAccessLogs(): any {

        const query = {
          "selector": {
            "loopback__model__name": {"$gt": ""},
          },
          "use_index": "_design/lb-index-ddoc-AcpGroupModel",
          "sort": [{"createdDateTime:string": "desc"}],
        };

        return loopBackCloudantDB.runQuery("ms-acps", "AcpGroupModel", query);

      }

    public searchAccessLogs(criteria: string): any {

        const query = {
          "selector": {
            "$or": [
              {"name": {"$regex": "(?i)" + criteria}},
            ],
          },
          "use_index": "_design/lb-index-ddoc-AcpGroupModel",
          "sort": [{"_id:string": "desc"}],
        };

        return loopBackCloudantDB.runQuery("ms-acps", "AcpGroupModel", query);
    }
    public getLastAccessLogByAcpId(_id: string): any {



        // call to the DB
        return this.criteria;
    }
}

