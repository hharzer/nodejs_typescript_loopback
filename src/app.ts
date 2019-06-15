/**
 * @copyright NBCUniversal, 2019. All Rights Reserved.
 */
"use strict";
import util from "util";
import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import dotenv from "dotenv";
import expressValidator from "express-validator";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";
import swaggerValidator from "swagger-express-validator";
import { setRoutes } from "./routes/index.routes";
import { SESSION_SECRET } from "./util/secrets.util";
const schema = YAML.load("./src/definitions/unicorn-cs.yaml");


// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Create Express server
const app = express();

const opts = {
  schema, // Swagger schema
  preserveResponseContentType: false, // Do not override responses for validation errors to always be JSON, default is true
  returnRequestErrors: true, // Include list of request validation errors with response, default is false
  returnResponseErrors: true, // Include list of response validation errors with response, default is false
  validateRequest: true,
  validateResponse: false,
  requestValidationFn: (req: { method: any; originalUrl: any; }, data: any, errors: any) => {
    console.log("entered");

    console.log(`failed request validation: ${req.method} ${req.originalUrl}\n ${util.inspect(errors)}`);
  },
  responseValidationFn: (req: { method: any; originalUrl: any; }, data: any, errors: any) => {
    console.log(`failed response validation: ${req.method} ${req.originalUrl}\n ${util.inspect(errors)}`);
  },
};

app.use(swaggerValidator(opts));
app.use("/explorer", swaggerUi.serve, swaggerUi.setup(schema));

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET
}));

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});


/** Set the express js routes */
 setRoutes(app);


export default app;