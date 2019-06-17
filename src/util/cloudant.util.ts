// import { reject } from "bluebird";
import { CLOUDANT_USERNAME, CLOUDANT_PASSWORD, CLOUDANT_URI } from "./secrets.util";

const DataSource = require("loopback-datasource-juggler").DataSource;
const Cloudant = require("loopback-connector-cloudant");
const config = {
  connector: "cloudant",
  url: `http://${CLOUDANT_USERNAME}:${CLOUDANT_PASSWORD}@${CLOUDANT_URI}`,
  debug: true,
  database: "any"
};

export namespace loopBackCloudantDB {

  function setConnection(_databaseName: string) {
    try {
      config.database = _databaseName;
      return new DataSource(Cloudant, config);
    } catch (_error) {
      throw new Error(_error);
    }
  }

  export async function runQuery(_db: string, _model: string, _query: object): Promise<any> {
    try {

      return new Promise((resolve, reject) => {

        const dsConnection = setConnection(_db);
        dsConnection.once("connected", function () {

          const useModel = dsConnection.define(_model, {
            name: { type: String }
          });

          useModel.find(_query).then(function (_result: any, _err: any) {
            return resolve(_result);
          });

        }).catch((_error: any) => {
          return reject(_error);
        });

      }).catch(_error => {
        return new Promise((resolve, reject) => {
          return reject("Something bad happened");
        });
      });

    } catch (e) {
      return new Promise((resolve, reject) => {
        return reject("Something bad happened");
      });
    }
  }

  export async function viewDocs(_db: string, _viewname: string, _key: string): Promise<any> {
    try {

      return new Promise((resolve, reject) => {

        const dsConnection = setConnection(_db);
        dsConnection.once("connected", function () {
          dsConnection.connector.viewDocs("design_doc", _viewname, { key: _key }, function (_err: any, _result: any) {
            if (_err) {
              return reject(_err);
            }
             return resolve(_result);
          });
        });

      }).catch(_error => {
        return new Promise((resolve, reject) => {
          return reject("Something bad happened");
        });
      });

    } catch (e) {
      return new Promise((resolve, reject) => {
        return reject("Something bad happened");
      });
    }
  }


}