import { reject } from "bluebird";
import { CLOUDANT_USERNAME, CLOUDANT_PASSWORD, CLOUDANT_URI } from "./secrets.util";

const DataSource = require ("loopback-datasource-juggler").DataSource;
const Cloudant   = require ("loopback-connector-cloudant");
const config = {
    connector: "cloudant",
    url: "http://" + CLOUDANT_USERNAME + ":" + CLOUDANT_PASSWORD + "@" + CLOUDANT_URI,
    debug: true,
    database: "any"
};

export namespace loopBackCloudantDB {

    function setConnection(_databaseName: string) {
      try {
        config.database = _databaseName;
        return new DataSource (Cloudant, config);
      } catch (e) {
       return e;
      }
    }

    export async function runQuery(_db: string, _model: string, _query: object): Promise<any> {
      try {

            return new Promise((resolve) => {

              const dsConnection = setConnection(_db);
              dsConnection.once("connected", function() {

                const useModel = dsConnection.define (_model, {
                  name: { type: String }
                });

                useModel.find(_query).then(function(_result: any, _err: any) {
                  resolve(_result);
                });

              });

            }).catch(_error => {
              reject(_error);
            });

      } catch (e) {
              return new Promise((reject) => {
              reject("Something bad happened");
        });
      }
    }

    export async function viewDocs(_db: string, _viewname: string, _key: string): Promise<any> {
      try {

            return new Promise((resolve) => {

              const dsConnection = setConnection(_db);
              dsConnection.once("connected", function() {
                dsConnection.connector.viewDocs("design_doc", _viewname, {key: _key}, function(_err: any, _result: any) {
                  if (_err) {
                    reject(_err);
                  }
                    resolve(_result);
                  });
              });

            }).catch(_error => {
              reject(_error);
            });

      } catch (e) {
        return new Promise((reject) => {
              reject("Something bad happened");
        }).catch(_error => {
              reject(_error);
        });
      }
    }


}