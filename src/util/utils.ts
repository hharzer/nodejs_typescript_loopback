// /* eslint-disable new-cap */
// "use strict";

// /**
//  * @copyright NBCUniversal, 2016. All Rights Reserved.
//  */

// const http = require("https");
// const Cloudant = require("cloudant");
// require("dotenv").config();

// const cloudantInstance = Cloudant({
//   url: `${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_TYPE}`,
//   plugin: "promises",
// });

// const cloudantReadOnlyInstance = Cloudant({
//   url: `${process.env.READ_PROTOCOL}://${process.env.READ_USER}:${process.env.READ_PASS}@${process.env.READ_TYPE}`,
//   plugin: "promises",
// });

// module.exports = {
//   simpleCloudant(DB: any) {
//     if (!DB) {
//       return console.log(
//         `Sorry, you must provide a db object to initCloudant :(`
//       );
//     }
//     const db = cloudantInstance.db.use(DB);
//     return db;
//   },

//   initCloudant(DB: { type: any; }, ACTION: string) {
//     if (!DB) {
//       return console.log(
//         `Sorry, you must provide a db object to initCloudant :(`
//       );
//     }
//     if (ACTION && ACTION == "READ") {
//       const db = cloudantReadOnlyInstance.db.use(DB.type);
//       return db;
//     } else {
//       const db = cloudantInstance.db.use(DB.type);
//       return db;
//     }
//   },

//   apiRestInvoke(requestOptions: any, postData: any) {
//     return new Promise(async function (resolve, reject) {
//       process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//       const req = await http.request(requestOptions, function (res: { on: { (arg0: string, arg1: (chunk: any) => void): void; (arg0: string, arg1: () => void): void; }; }) {
//         // cumulate data
//         let body: any = [];
//         res.on("data", function (chunk: any) {
//           body.push(chunk);
//         });
//         // resolve on end
//         res.on("end", function () {
//           try {
//             body = JSON.parse(Buffer.concat(body).toString());
//           } catch (e) {
//             reject(e);
//           }
//           resolve(body);
//         });
//       });
//       // reject on request error
//       req.on("error", function (err: any) {
//         reject(err);
//       });
//       if (postData) {
//         req.write(JSON.stringify(postData));
//       }
//       req.end();
//     });
//   },
// };
