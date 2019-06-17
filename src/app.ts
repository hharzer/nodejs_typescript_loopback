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
import SwaggerParser from "swagger-parser";
import { setRoutes } from "./routes/index.routes";
import { SESSION_SECRET } from "./util/secrets.util";
// import { SwaggerInputValidator } from "./util/swagger.validator.util";

const schema = YAML.load("./src/definitions/unicorn-cs.yaml");


// Callback syntax
SwaggerParser.validate(schema, (err: any, api: any) => {
  if (err) {
  }
  else {
  }
});

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Create Express server
const app = express();

// const swaggerMiddleware  = SwaggerInputValidator.init(schema);
// console.log(swaggerMiddleware);

/**
 *  Seesion headers
 */
 app.use(function (req, res, next) {
  res.header("x-powered-by", "NBCUO");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, X-Access-Token, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  next();
});

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
  res.locals.swaggerSchema = schema;
  next();
});

// // Swagger Explorer
app.use("/explorer", swaggerUi.serveWithOptions({ cacheControl: false, dotfiles: "deny" }), swaggerUi.setup(schema));
app.use("/status", (req, res) => {
  res.json({
    status: "OK",
  });
});

app.use((err: any, req: any, res: { status: (arg0: number) => void; json: (arg0: any) => void; }, next: any) => {
  res.status(500);
  res.json(err);
});

/** Set the express js routes */
setRoutes(app);

app.all("/*?", function (req, res) {
  res.status(403).json({
    status: 403,
    code: 404,
    message: "Please provide a CURL resource for the API.",
    developerMessage: "Verify the existence of the CRUD resource."
  });
});

export default app;