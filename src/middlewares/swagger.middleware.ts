/**
 * Login Required middleware.
 */
 import async from "async";
 import YAML from "yamljs";
 import { Request, Response, NextFunction } from "express";

 export let SwaggerInputValidator = (req: Request, res: Response, next: NextFunction) => {

        console.log("console.log(value)");

    if (res.locals.swaggerSchema || typeof res.locals.swaggerSchema === "object") {

         console.log(JSON.stringify(res.locals.swaggerSchema.paths));

        res.locals.swaggerSchema.paths.forEach(function (value: any) {
          console.log(value);
        });

      }

     next();
 };